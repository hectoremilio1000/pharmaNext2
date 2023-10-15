import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';
// components/SubirImagenes.js
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Logger } from 'aws-amplify';
import axios from "axios";
import awsmobile from "../aws-exports";  // Asegúrate de proporcionar la ruta correcta

const logger = new Logger('S3Uploader')

function Login({ signOut, user }) {
    console.log(process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID, process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY)

    const s3Client = new S3Client({
        region: awsmobile.aws_project_region,
        credentials: {
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
        },
        logger: logger
    });
    const subirImagen = async (url, nombre) => {
        try {
            const { data } = await axios.get(url, { responseType: 'arraybuffer' });
            const buffer = Buffer.from(data, "binary");

            const key = `public/images/${nombre}.jpg`;

            const putCommand = new PutObjectCommand({
                Bucket: "pharmaadmind17cdaaa44b744eebe897721cdc34e8f113227-dev",
                Key: key,
                Body: buffer,
                ContentType: 'image/jpeg',
            });
            logger.info('Intentando subir imagen:', nombre);
            await s3Client.send(putCommand);
            console.log(`Imagen ${nombre} subida con éxito.`);
            logger.info(`Imagen ${nombre} subida con éxito.`);
        } catch (error) {
            console.error(`Error subiendo imagen ${nombre}:`, error);
            logger.error(`Error subiendo imagen ${nombre}:`, error);
        }
    };

    const handleSubirImagenes = async () => {
        // Importas tu archivo JSON
        const productos = require('../../public/data/constantesclasifSanPablo.json');

        // Si hay productos disponibles en el JSON, solo subirás la primera imagen
        if (productos && productos.length > 0) {
            const producto = productos[0];  // Solo tomas el primer producto
            const url = producto.images.find(image => image.format === "product").url;
            const nombre = `${producto.name}_${producto.id}`.replace(/ /g, '-');
            await subirImagen(url, nombre);

        } else {
            console.error('No hay productos en el archivo JSON.');
        }
    };

    return (
      <div>
    
            <Button onClick={handleSubirImagenes}>Subir Imágenes</Button>

            <Button onClick={signOut}>Sign out</Button>
        </div>
  )
}

export default withAuthenticator(Login)