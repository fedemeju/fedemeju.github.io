(function() {
 const messages = JSON.parse("{\"QMURRw\":\"Vincular con Facebook\",\"xd6/Zw\":\"Escribe un mensaje...\",\"uJxNJw\":\"Eliminar publicación\",\"wxTdGQ\":\"Agregar app a Facebook\",\"AfGoEQ\":\"aqui\",\"rAkAHg\":\"Programado\",\"0qMLEQ\":\"Tu título tiene demasiados caracteres\",\"Egj8iA\":\"En pausa\",\"VpoW9Q\":\"Suscribirme y publicar\",\"AH0Ofw\":\"¡Publica tus diseños directamente en la biblioteca multimedia de Facebook!\",\"p5tgoQ\":\"Seleccionar otro grupo\",\"IXWKbQ\":\"Busca Canva y haz clic en Agregar.\",\"875Kqg\":\"No se puede publicar tu diseño en Instagram porque es demasiado ancho. <a data-anchor-id=\\\"aspect-ratio\\\">Quiero redimensionarlo</a>.\",\"ALvOeA\":\"Eliminar publicación programada\",\"iv7wIA\":\"Listo\",\"VCoJdQ\":\"Vuelve aquí para continuar.\",\"xDPkuw\":\"Selecciona a. m. o p. m.\",\"1K/96g\":\"Vincular con LinkedIn\",\"gYT+AQ\":\"Seleccionar otro tablero\",\"CNk4nA\":\"Hacer una copia\",\"i1FbgA\":\"Por el momento, no se puede cancelar la publicación programada\",\"9A2Xiw\":\"En los grupos de Facebook, solo puedes compartir una página por publicación.\",\"QC3rBQ\":\"canal\",\"FF7uzQ\":\"Sitio web de destino\",\"qrJm6A\":\"Tu diseño tiene elementos prémium. Paga los elementos para publicar tu diseño o sube de categoría para programarlo.\",\"JBcKtw\":\"Vincular cuenta nueva\",\"O13hAQ\":\"Ir al mes actual\",\"OT4rgg\":\"Actualizar configuración de Facebook\",\"AS87MA\":\"Selecciona un canal para programar la publicación.\",\"Itsysg\":\"No se puede publicar tu diseño en Instagram porque es demasiado ancho o largo. Redimensiona tu diseño ({0} x {1}) y vuelve a intentarlo.\",\"iMBZWw\":\"Guardar borrador\",\"iEfJyw\":\"Pinterest solo acepta una página por publicación.\",\"75L9Hw\":\"Escribe un mensaje...\",\"BqfP0g\":\"Quitar fecha y hora\",\"A9VY7w\":\"¡Publica tus diseños directamente en las páginas de empresa de LinkedIn!\",\"G8AyaA\":\"¡Publica tus diseños directamente en tus páginas de Facebook!\",\"hrrwgg\":\"Escribe un mensaje...\",\"fFA3GQ\":\"Ir al mes anterior\",\"vIwUsw\":\"Error al guardar el borrador\",\"KM9XUA\":\"LinkedIn solo acepta una página por publicación.\",\"zs8PGQ\":\"Elige un blog\",\"X7dSIw\":\"Publicado\",\"Yd/5+w\":\"Tu publicación está programada para\",\"QuN/Kw\":\"¡Publica tus diseños directamente en tus grupos de Facebook!\",\"MX1+Qw\":\"Slack solo acepta una página por publicación.\",\"iuIVOg\":\"Ir a la página de inicio\",\"U/yrug\":\"Weibo solo acepta una página por publicación.\",\"JSaYVA\":\"Elegir otra empresa\",\"X0U7/g\":\"Puedes incluir, como máximo, {0} hashtags por post. Quita algunos hashtags de tu post.\",\"4Zhmgw\":\"¿No encuentras la cuenta de Instagram que estás buscando? Para usar más cuentas con Canva, <a data-anchor-id=\\\"update-targets\\\">actualiza tu configuración de Facebook</a>.\",\"bfx4qA\":\"Has seleccionado más páginas de las que acepta Tumblr. Verifica tu selección, de lo contrario, procederemos con el límite aceptado.\",\"hT4xag\":\":\",\"/MQ2cg\":\"Vincular con Slack\",\"jPxJOQ\":\"Tumblr solo acepta hasta diez páginas por publicación.\",\"KcFVwA\":\"Los videos publicados en las cuentas de Instagram para empresas deben tener más de 3 segundos y menos de 1 minuto de duración. Este video dura {0, plural, one {# segundo} other {# segundos}}\",\"EjbUYw\":\"Vincular Twitter\",\"oXbx9Q\":\"Elige la cuenta que quieras actualizar para ir a Facebook. Asegúrate de haber iniciado sesión con esta cuenta.\",\"tvEX4w\":\"Tuvimos un problema técnico al planificar la publicación de tu diseño. Vuelve a intentarlo.\",\"K5Vmpw\":\"Seleccionar otra página\",\"Tz6LlQ\":\"No se puede publicar tu diseño en Instagram porque es demasiado largo. <a data-anchor-id=\\\"aspect-ratio\\\">Quiero redimensionarlo</a>.\",\"lzmYxQ\":\"Error al intentar vincular tu cuenta. Vuelve a intentarlo.\",\"KSWiEQ\":\"{0} - {1}\",\"R4ZUgw\":\"¡Publica tus diseños directamente en Weibo!\",\"7zLrAA\":\"¡Publica tus diseños directamente en LinkedIn!\",\"ws+TIA\":\"¿Confirmas que quieres cancelar la publicación programada para esa fecha y hora?\",\"mOtgEg\":\"¡Se programó la publicación de tu diseño!\",\"dTmitA\":\"¿Quieres cancelar la publicación programada?\",\"yKs6+A\":\"Sin título\",\"00HgxQ\":\"Programar\",\"m9AAug\":\"Escribe tu historia...\",\"tszjEg\":\"Tuvimos un problema técnico al intentar guardar tu borrador. Vuelve a intentarlo.\",\"yCYhWw\":\"No pudimos encontrar tableros. Inicia sesión en tu cuenta de Pinterest y asegúrate de que el tablero sea público para que puedas publicar diseños desde Canva.\",\"mIwaLQ\":\"Elige un canal\",\"GeLfJw\":\"Solo puedes seleccionar cuentas de Instagram Business\",\"9GFeVA\":\"Sin título\",\"3HYNJw\":\"Tu publicación tiene demasiados caracteres.\",\"MtHnuw\":\"a. m.\",\"RlEp9A\":\"Borrador\",\"VzErkA\":\"Error al intentar vincularte con tu grupo. Vuelve a intentarlo.\",\"vMuKjQ\":\"Seleccionaste más páginas de las que acepta Twitter. Verifica cuántas páginas quieres publicar y adapta la selección o publicaremos el contenido según el límite establecido.\",\"zVzWRg\":\"Borrador\",\"Dhl1fw\":\"Seleccionar otra página\",\"E8Clxg\":\"No puedes programar la publicación de este diseño porque no lo creaste\",\"saKdPA\":\"Si quieres, puedes agregar un título\",\"4Q2/NA\":\"Se produjo un error. Tu publicación sigue programada. Vuelve a intentarlo.\",\"rsmW4w\":\"Elige un grupo\",\"3XfiOw\":\"Twitter solo acepta hasta cuatro páginas por publicación.\",\"Eu3uaQ\":\"Cambiar fecha y hora\",\"AemLEA\":\"Escribe un mensaje...\",\"4vHiaQ\":\"Planificador de contenido\",\"9QlS+g\":\"Solo tú\",\"pNwBrw\":\"¡Se guardó tu borrador!\",\"r3d1CA\":\"Los videos publicados en las cuentas de Instagram para empresas deben tener más de 3 segundos y menos de 1 minuto de duración. Este video dura {0, plural, one {# minuto} other {# minutos}} y {1, plural, one {# segundo} other {# segundos}}\",\"8qACwA\":\"Canva no es compatible con este tipo de cuenta de Instagram. Por eso, no aparece en la lista. Selecciona una cuenta de Instagram para empresas.\",\"BOjeKQ\":\"Convierte tu cuenta personal o de creador de Instagram en una <b>cuenta de Instagram para empresas</b>. <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Más información</a>\",\"GcaPAA\":\"Agregar app a Facebook\",\"vQOu+w\":\"Tu diseño está vacío. Agrega algunos elementos antes de planificar la publicación.\",\"w3oFiw\":\"Seleccionaste más páginas de las que acepta Slack. Checa cuántas páginas quieres publicar y adapta la selección o publicaremos el contenido según el límite establecido.\",\"2f6wtw\":\"Suscribirme y programar publicación\",\"Ip1Tug\":\"<b>¿Vinculaste tu cuenta a Instagram para empresas?</b><br />Asegúrate de autorizar todas las páginas que quieras usar en Canva, incluidas las páginas de Facebook vinculadas a tus cuentas de Instagram.\",\"q8VzGg\":\"Instagram Business solo acepta una página por publicación.\",\"QGlz6w\":\"Planificador de contenido\",\"w6/kOA\":\"Vincula tu cuenta con una <b>página de Facebook</b>. <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Obtén más información</a>.\",\"NtiAzw\":\"Publicar\",\"MabFow\":\"Agregar descripción...\",\"WC81dw\":\"Vincular con Pinterest\",\"adx3FA\":\"¡Publica tus diseños directamente en Slack!\",\"gPCWkw\":\"Elige una página\",\"or+VnQ\":\"canal\",\"HdwTGA\":\"Programar publicación para después\",\"StTuuA\":\"Seleccionar otro canal\",\"MxsGGA\":\"Pagar y publicar ahora\",\"PO28bw\":\"Elige una empresa\",\"L1MoRw\":\"¡Publica tus diseños directamente en Pinterest!\",\"IU2+kQ\":\"Error\",\"PMR6mQ\":\"aquí\",\"ORL7Zg\":\"Ir al mes siguiente\",\"KBxYBw\":\"Hacer una copia\",\"8vnx2Q\":\"p. m.\",\"jhvojQ\":\"¿En qué estás pensando?\",\"MXYBXw\":\"Minutos\",\"dZ7/4g\":\"Pagar y programar publicación\",\"Z5SwPA\":\"No\",\"cQF2Sg\":\"Agregar comentario (opcional)…\",\"ObR10w\":\"Desde la Configuración avanzada del grupo, accede a Apps.\",\"tDBEaQ\":\"Seguir editando\",\"hi/3Tw\":\"Compartido\",\"Oxo4sg\":\"Escribe un mensaje…\",\"yluFRQ\":\"Selecciona otro blog\",\"PeC1mQ\":\"Puedes incluir, como máximo, {0} menciones por post. Quita algunas menciones de tu post.\",\"Q/b8dg\":\"Elegir otra cuenta\",\"5+Irdw\":\"Título\",\"R8WA4A\":\"¿No encuentras tu página de Facebook? Para usar más páginas con Canva, <a data-anchor-id=\\\"update-targets\\\">actualiza tu configuración de Facebook</a>.\",\"xd8ZxQ\":\"Sí, cancelar\",\"Z36dQA\":\"Suscribirme y publicar ahora\",\"6/887g\":\"La URL de este sitio web no es válida\",\"yUophQ\":\"Vincular con LinkedIn\",\"FMbmmQ\":\"UTC{0}\",\"VERRyA\":\"Vincular con Tumblr\",\"FShY0Q\":\"Alcanzaste el límite de 280 caracteres de los posts para Twitter. Ten en cuenta que Twitter cambia las URL de cualquier longitud a 23 caracteres.\",\"mFxg/Q\":\"Programar\",\"831dqw\":\"Elige un tablero\",\"7s5ZDw\":\"Tus páginas de Facebook y de Instagram se administran desde Facebook. <strong>Debes autorizar las cuentas de Instagram para empresas y cualquier página de Facebook que quieras usar en Canva.</strong>\",\"l7tAdA\":\"Pagar y publicar\",\"+fXQJQ\":\"Cargando plataformas disponibles\",\"AvF9uA\":\"Agregar título…\",\"ZAXIFw\":\"Horas\",\"2HPxUA\":\"Copia de {0}\",\"n5kT+Q\":\"¡Publica tus diseños directamente en Tumblr!\",\"I1MfQg\":\"Guardar y programar\",\"VnrDRA\":\"¡Publica tus diseños directamente en Twitter!\",\"U4tk7A\":\"Acciones para la publicación\",\"p18PgA\":\"Tu diseño está vacío. Agrega algunos elementos antes de publicarlo.\",\"9b4S2Q\":\"Programado\",\"Y/KGBA\":\"Publicar ahora\",\"pckpZg\":\"CREADOR\",\"i4NRJQ\":\"Tuvimos un problema de nuestro lado. <a data-anchor-id=\\\"try-again\\\">Vuelve a intentarlo</a>.\",\"Fpco2A\":\"La publicación del diseño ya está programada\",\"AXMIXg\":\"Para publicar tu diseño, selecciona al menos una página.\",\"yq3OMA\":\"Seleccionaste más páginas de las que acepta esta plataforma. Verifica cuántas páginas quieres publicar y adapta la selección o publicaremos el contenido según el límite establecido.\",\"W5OQfg\":\"Vincular por Facebook\",\"+x4K4A\":\"Hay otra publicación programada para esa hora, así que retrasamos un poco esta publicación.\",\"eVpgOQ\":\"Elige una cuenta\",\"fu/1BQ\":\"No pudimos programar la publicación de tu diseño\",\"4x6RWQ\":\"Vincular con Weibo\",\"ZJW6/A\":\"Conéctate a través de Facebook.\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["es-419"] = strings["es-419"] ? Object.assign(strings["es-419"], messages) : messages;
})();