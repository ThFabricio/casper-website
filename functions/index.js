const functions = require("firebase-functions");


var admin = require("firebase-admin");

const serviceAccount = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const express = require("express");
const cors = require("cors");

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// build multiple CRUD interfaces:
app.post("/", (req, res) => {
    let refDB
    const intent = req.body.queryResult.intent.displayName

    switch (intent) {
        case "Esportes":
            refDB = db.collection("noticias").where("categoria", "==", "Esportes")
            break;
        case "Politica":
            refDB = db.collection("noticias").where("categoria", "==", "Politica")
            break;
        case "Famosos":
            refDB = db.collection("noticias").where("categoria", "==", "Famosos")
            break;
        case "Entretenimento":
            refDB = db.collection("noticias").where("categoria", "==", "Entretenimento")
            break;
    }
    refDB.get().then(snapshot => {
        let noticias = []
        snapshot.forEach(doc => {
            noticias.push({...doc.data(), id: doc.id })
        })
        
        

            noticias.sort(() => Math.random() - 0.5)
            noticias = noticias.slice(0, 10)

        const result = noticias.map((noticia) => {
                return  {
                    "subtitle": noticia.descricao,
                    "default_action": {
                        "type": "web_url",
                        "webview_height_ratio": "tall",
                        "url": "https://casper-chatbot.firebaseapp.com/ver-noticia" + "/" + noticia.id + "/"
                    },
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://casper-chatbot.firebaseapp.com/ver-noticia" + "/" + noticia.id + "/",
                            "title": "Ler mais"
                        },
                    ],
                    "image_url": noticia.imagem,
                    "title": noticia.titulo
                }
            })

            res.send({
                "fulfillmentMessages": [
                    {
                        "payload": {
                            "facebook": {
                                "attachment": {
                                    "payload": {
                                        "elements": result,
                                        "template_type": "generic"
                                    },
                                    "type": "template"
                                }
                            }
                        },

                    }
                ]
            })
    })
    
}

);


// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);