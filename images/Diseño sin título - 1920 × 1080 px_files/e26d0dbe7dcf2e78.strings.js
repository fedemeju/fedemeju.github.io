(function() {
 const messages = JSON.parse("{\"Zzqtqw\":\"Ver todos los comentarios\",\"wJCTCw\":\"No se guardó tu reacción. Haz clic para volver a intentarlo.\",\"EX+mtw\":\"Para acceder a los comentarios resueltos, debes tener conexión a Internet.\",\"13+qHQ\":\"Se produjo un error al enviar el comentario.\",\"GXDK9g\":\"Error en las reacciones a los comentarios. Actualiza la página y vuelve a intentarlo.\",\"LRA3hg\":\"¡Comentario resuelto!\",\"p8Tn6Q\":\"Cerrar el menú de reacciones\",\"1hV5dA\":\"Ya agregaste un sticker\",\"fq5CFw\":\"Atrás\",\"nid+HQ\":\"{0} reacciones, mantén presionado para ver quién reaccionó con “{1}”\",\"Em9Gww\":\"{0, number}\",\"BMl1pA\":\"Ver {0} {0, plural, one {el comentario} other {los comentarios}} sin leer\",\"ZZ9WPg\":\"Cerrar hilo\",\"wZB85A\":\"Se asignó a {0}\",\"2jNjmA\":\"Me encanta\",\"P82FGA\":\"Hilo\",\"KAQIsg\":\"No fue posible cargar la ventana de comentarios resueltos. Vuelve a intentarlo más tarde.\",\"GNidlg\":\"Usuario eliminado\",\"r/GefQ\":\"Editar respuesta\",\"GhalUg\":\"Guardar\",\"BBdsDw\":\"No es posible usar las reacciones sin conexión.\",\"ZFmo0Q\":\"No tienes conexión a Internet\",\"bRA1pg\":\"Enviar comentario\",\"mbaR6w\":\"<b><a data-anchor-id=\\\"sign-up\\\">Regístrate</a></b> o <b><a data-anchor-id=\\\"log-in\\\">inicia sesión</a></b> para responder a este comentario\",\"6jlbsQ\":\"Comentario anterior\",\"DJPZfg\":\"Comentarios\",\"D1R4ig\":\"Agregar sticker\",\"s4iUTw\":\"<b><a data-anchor-id=\\\"sign-up\\\">Regístrate</a></b> o <b><a data-anchor-id=\\\"log-in\\\">inicia sesión</a></b> para dejar un comentario\",\"5mSssg\":\"Cerrar comentarios\",\"LEl31Q\":\"Sin resolver\",\"RLCnwQ\":\"Los comentarios están desactivados\",\"Y3aQng\":\"<b>{1} y {2}</b> reaccionaron con \\\"{0}\\\"\",\"L1Ai+w\":\"Editar comentario\",\"2DNsgQ\":\"Más opciones\",\"uLTu2w\":\"No se pudo encontrar el comentario\",\"Z40ezQ\":\"Resueltos\",\"uKyp1A\":\"Me parece fantástico\",\"aFhaIw\":\"No hay comentarios resueltos\",\"fq9A5Q\":\"No se pudieron cargar los comentarios\",\"BWT+Yg\":\"Eliminar comentario\",\"Ep6eqg\":\"Comentarios resueltos\",\"WomfwA\":\"Nuevo\",\"y9ZrvQ\":\"Mostrar menos\",\"lPPh2w\":\"Reaccionó con \\\"{0}\\\"\",\"M1hYiA\":\"Ver reacciones\",\"CRsrKA\":\"Agregar comentario\",\"xIEPdw\":\"Me parece excelente\",\"INes9g\":\"El comentario fue resuelto o eliminado\",\"SNYQdA\":\"Resolver comentario\",\"iLdOLg\":\"No se subieron los stickers. <a data-anchor-id=\\\"try-again\\\">Inténtalo de nuevo</a>.\",\"I5pONg\":\"<b>Tú, {1}, {2} y {3, plural, one {# persona más} other {# personas más}}</b> reaccionaron con \\\"{0}\\\"\",\"a5Sxgw\":\"<b>{1}, {2} y {3}</b> reaccionaron con \\\"{0}\\\"\",\"+RNIXg\":\"Nuevo\",\"9o4bFQ\":\"Continuar\",\"MN4+3w\":\"Comenta el borrador. Agrega un comentario o @menciona a alguien\",\"Rll9DQ\":\"Eliminar sticker\",\"ZKrOZQ\":\"Mostrar {0, plural, one {respuesta} other {las # respuestas}}\",\"4IDysA\":\"Para agregar un comentario, selecciona un elemento o una página\",\"SOvnag\":\"Me deja pensando\",\"63XlkQ\":\"Listo\",\"5wWqPQ\":\"Siguiente comentario\",\"GxneBw\":\"Si haces clic en el hilo de comentarios, se seleccionará el elemento vinculado.\",\"6hbT9Q\":\"Guardar comentario\",\"CkkEoQ\":\"Cancelar\",\"hZ18Gg\":\"Me sorprende\",\"2CAShQ\":\"Resolver comentario\",\"KIj+iw\":\"<b>{1}</b> reaccionó con \\\"{0}\\\"\",\"kdJ+sQ\":\"(editado)\",\"yL97Gg\":\"Ver y editar\",\"ioraqw\":\"Si continúas, perderás el comentario que dejaste en borrador.\",\"31xktA\":\"{0}/{1}\",\"ZVR6fg\":\"Mostrar más usuarios para asignar\",\"pkqYIQ\":\"Cancelar edición\",\"Tb2Muw\":\"Reintentar\",\"17eDJA\":\"Eliminar respuesta\",\"688VSA\":\"Comentar\",\"Q+IZtg\":\"Más de 99\",\"Vro+UA\":\"Responder\",\"qah/Qw\":\"<b>{1}, {2}, {3} y {4, plural, one {# persona más} other {# personas más}}</b> reaccionaron con \\\"{0}\\\"\",\"XLcrCg\":\"Asignar a {0}\",\"OtBQrw\":\"Ver {0, plural, one {# respuesta} other {# respuestas}}\",\"yj7EFQ\":\"Volver\",\"girWKA\":\"Comentar\",\"zXvGKA\":\"No hay comentarios resueltos.\",\"0Ya4KA\":\"Me gusta\",\"w3hueg\":\"{0, number}\",\"w+xSJA\":\"<b>Tú</b> reaccionaste con “{0}˝\",\"VE1dcw\":\"Responder…\",\"2z3WOA\":\"<b>Tú y {1} </b> reaccionaron con \\\"{0}\\\"\",\"jighsQ\":\"Me divierte\",\"F0cgrA\":\"No hay comentarios en este diseño.\",\"TWOUuA\":\"Se te asignó a ti\",\"MIVioA\":\"Mover a “Comentarios agregados”\",\"G5BCuQ\":\"{0, plural, one {# respuesta} other {# respuestas}}\",\"LxivSA\":\"Cancelar respuesta\",\"jPxw4A\":\"Sugerencias\",\"Frp0dA\":\"Haz clic para volver a intentarlo\",\"HnDGTQ\":\"Leer el comentario de {0}. {1, plural, one {# respuesta} other {# respuestas}}.\",\"NemJFw\":\"No pudimos cargar tus comentarios resueltos.\",\"GRZAsA\":\"Volver a intentarlo\",\"DLh9+A\":\"Este comentario está resuelto\",\"KwLzzw\":\"Ver todo\",\"fmWSuw\":\"Cancelar comentario\",\"zBy57w\":\"Asignártelo\",\"wpUDNQ\":\"No pudimos cargar tus comentarios.\",\"YhRlUw\":\"Enviar respuesta\",\"kFxubQ\":\"Cancelar\",\"pW1yIw\":\"Mostrar más\",\"Q22p1A\":\"Atrás\",\"shLpRQ\":\"Agregar una reacción\",\"viFGCQ\":\"No se envió tu comentario. Vuelve a intentarlo.\",\"qzmdJQ\":\"Asignado a\",\"Vbt1RQ\":\"Invitaremos a quienes @menciones a este diseño y les enviaremos una notificación por correo electrónico.\",\"uNE1Zw\":\"{0, number} comentarios\",\"Cj3aIw\":\"Eliminar hilo\",\"PGLyHw\":\"Responde en el borrador. Agrega una respuesta o menciona a @alguien.\",\"rnE3Tg\":\"Deshacer\",\"mRofdQ\":\"Usuario desconocido\",\"/ST7iw\":\"Se perderá tu comentario en borrador\",\"OFcESA\":\"Ver {0, plural, one {el comentario} other {comentarios}}\",\"sCcq7A\":\"Comenta o @menciona a alguien\",\"qDuAvQ\":\"Guardar respuesta\",\"ZuJEvg\":\"<b>Tú, {1} y {2}</b> reaccionaron con \\\"{0}\\\"\",\"MMTpHg\":\"Vuelve a intentarlo\",\"Nv62Ng\":\"No fue posible cargar las reacciones a los comentarios\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["es-419"] = strings["es-419"] ? Object.assign(strings["es-419"], messages) : messages;
})();