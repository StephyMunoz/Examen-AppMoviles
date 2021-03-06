# Examen 1 - Aplicaciones Moviles
### Mateo Borja, Stephanie Muñoz, Stiven López

Esta aplicación consiste en un chat simple pero completo hecho con Ionic - Angular y FireBase, a continuación se muestran sus funcionalidades

### Registro e Ingreso

La aplicación se ve así al abrirse:

![image](https://user-images.githubusercontent.com/66144847/148621316-b00dfcd8-cd4a-4fb3-8bf1-e80d9f020485.png)

Si se registra un nuevo usuario con el primer botón o se ingresa usando un usuario anterior con el segundo botón, se mostrará la pantalla de chat

![image](https://user-images.githubusercontent.com/66144847/148621638-f054d4f1-7313-41e2-9708-4f71eaeb5187.png)

### Recuperación de Contraseña

Se pueden observar todos los mensajes anteriores, el botón de salir en la esquina superior derecha, los botones para las diferentes funciones y el campo para escribir el mensaje. Si se sale al inicio, se puede utilizar la función de recuperar contraseña, la cual enviará un correo para reestablecer la credencial

![image](https://user-images.githubusercontent.com/66144847/148621883-d26f0c1f-ecc7-4c8a-a1a6-702862f313b0.png)

Se mostrará una alerta cuando se envíe el correo de recuperación

![image](https://user-images.githubusercontent.com/66144847/148622688-c6ff36d0-602f-4594-886e-b5970a980f43.png)
![image](https://user-images.githubusercontent.com/66144847/148622702-4631e499-3667-47f9-9fa4-9655d264d329.png)

El Link en el correo llevará a una página para reestablecer la contraseña y se mostrará un mensaje que indica que se puede utilizar la nueva contraseña

![image](https://user-images.githubusercontent.com/66144847/148622809-ab445ab8-7161-4c1a-8a79-498d7c39ed2e.png)
![image](https://user-images.githubusercontent.com/66144847/148622923-ede17e98-75f4-48a5-b328-e4c81691d347.png)

### Chat y Funcionalidades

Volviendo al chat, se puede enviar un mensaje común escribiendo en el campo y presionando el botón enviar

![image](https://user-images.githubusercontent.com/66144847/148623643-079fce2f-5562-4dfa-91c3-84bb73423ccd.png)

Con el botón de cámara se puede enviar imágenes por chat, intentar enviar otro archivo que no sea una imagen mostrará una alerta de error

![image](https://user-images.githubusercontent.com/66144847/148623887-99c5481f-c13d-406a-b937-b84c36bc4351.png)
![image](https://user-images.githubusercontent.com/66144847/148623900-50694da1-640c-480e-a398-c4a92e11c78c.png)
![image](https://user-images.githubusercontent.com/66144847/148623928-6e867141-251f-4bff-af32-32906898e268.png)

Con el botón de geolocalización permite copiar al chat las coordenadas de latitud y longitud del usuario, notese que para esto se necesitará otorgar permisos al navegador o plataforma

![image](https://user-images.githubusercontent.com/66144847/148624348-b9b87fb5-0dd1-4282-8ff8-239ba9f8389a.png)

Si se utiliza el botón de adjuntar archivo, se podrán subir archivos al almacenamiento de FireBase, se obtendrá el Link del recurso en FireBase para que los usuarios puedan abrirlo

![image](https://user-images.githubusercontent.com/66144847/148624370-88cb4465-de3d-47c3-94c0-8c1c7c73be99.png)
![image](https://user-images.githubusercontent.com/66144847/148624515-53ad4d51-6a1d-4fc2-949a-58adc931c1d5.png)

### Generando APK

Desde Android Studio, se puede generar el APK para probrar la aplicación en dispositivos móviles o emuladores

![image](https://user-images.githubusercontent.com/66144847/148624934-b75643cf-46ef-4913-8576-2bc932cc67f7.png)
