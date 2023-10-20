import React, { useState } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';
// components/SubirImagenes.js
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Logger } from 'aws-amplify';
import axios from "axios";
import awsmobile from "../aws-exports";  // Asegúrate de proporcionar la ruta correcta



function Login({ signOut, user }) {

    console.log(user);
    return (
        <div>
            <p>Hola</p>
            {/* <p>Hola {user}</p> */}
            <Button onClick={signOut}>Salir</Button>
        </div>
    )
}
    
export default withAuthenticator(Login)