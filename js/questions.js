const questionsData = [
    // ================= FÁCIL (1-25): CONCEPTOS BÁSICOS DE SPICE Y NTC 5420-3 =================
    {
        id: 1,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es el centro de atención principal del enfoque SPICE (ISO/IEC 15504)?",
        opts: [
            "Medir únicamente la velocidad del código",
            "Evaluar y mejorar la capacidad de los procesos de software",
            "Garantizar que no existan errores en el producto final",
            "Instalar un software automático en la computadora"
        ],
        ans: 1,
        exp: "El centro de atención de SPICE es el proceso: las actividades, responsabilidades, controles y resultados mediante los cuales se desarrolla o mantiene el software."
    },
    {
        id: 2,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué significan las siglas de la iniciativa SPICE?",
        opts: [
            "Software Process Improvement and Capability Determination",
            "Software Performance Inspection and Code Evaluation",
            "System Programming Integration and Cyber Enterprise",
            "Standard Process Implementation and Quality Control"
        ],
        ans: 0,
        exp: "SPICE corresponde a Software Process Improvement and Capability Determination (Mejora de procesos de software y determinación de la capacidad)."
    },
    {
        id: 3,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué objeto examina la norma colombiana NTC 5420-3:2008 a diferencia de SPICE?",
        opts: [
            "Evalúa la puntualidad del personal",
            "Mide propiedades internas del producto de software (diseño, estructura, código)",
            "Audita los costos financieros de la empresa",
            "Define la velocidad de la red de internet"
        ],
        ans: 1,
        exp: "La NTC 5420-3 se enfoca en métricas internas para analizar propiedades de artefactos del producto, mientras SPICE evalúa la capacidad de los procesos."
    },
    {
        id: 4,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "Utilizando la analogía de la construcción de una casa presente en el guión, ¿qué representa SPICE?",
        opts: [
            "Medir la resistencia de los ladrillos colocados",
            "Evaluar cómo trabaja el equipo de construcción (si sigue planos, coordina y revisa)",
            "Pintar las paredes del edificio",
            "Comprar las herramientas de trabajo"
        ],
        ans: 1,
        exp: "Una cosa es evaluar cómo trabaja el equipo (SPICE/Proceso) y otra medir las características de la casa construida (NTC 5420-3/Producto)."
    },
    {
        id: 5,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué significan las siglas SPI en el contexto de desarrollo de software?",
        opts: [
            "Software Process Improvement (Mejora de Procesos de Software)",
            "System Performance Integration",
            "Standard Product Inspection",
            "Software Programming Interface"
        ],
        ans: 0,
        exp: "SPI significa Software Process Improvement: trabajar de forma sistemática para comprender, diagnosticar y mejorar las prácticas de desarrollo."
    },
    {
        id: 6,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Con qué actividad debe comenzar un programa serio de mejora de procesos (SPI)?",
        opts: [
            "Comprando la herramienta más moderna",
            "Con un diagnóstico de la forma actual de trabajar para establecer una línea base",
            "Trabajando el doble de horas",
            "Reemplazando a todo el equipo de desarrollo"
        ],
        ans: 1,
        exp: "Una mejora seria no comienza comprando herramientas; primero requiere un diagnóstico para establecer una línea base con datos comparables."
    },
    {
        id: 7,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál fue uno de los antecedentes normativos de madurez organizacional previo al desarrollo de SPICE?",
        opts: ["CMM (Capability Maturity Model)", "HTML5", "GitFlow", "IEEE 802.11"],
        ans: 0,
        exp: "Durante las décadas de 1980 y 1990, CMM (Capability Maturity Model) fue uno de los antecedentes clave en la evaluación de procesos."
    },
    {
        id: 8,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Por qué la calidad de un software no depende únicamente del talento individual del equipo?",
        opts: [
            "Porque el talento no sirve en programación",
            "Porque sin procesos organizados y controlados se generan imprecisiones, retrasos y sobrecostos",
            "Porque la calidad depende solo de las computadoras usadas",
            "Porque las normas prohíben el trabajo individual"
        ],
        ans: 1,
        exp: "Sin procesos organizados, la falta de claridad en requisitos o revisiones genera defectos y reprocesos independientemente de la habilidad técnica."
    },
    {
        id: 9,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Garantiza SPICE que el producto final esté 100% libre de errores?",
        opts: [
            "Sí, asegura perfección absoluta",
            "No, SPICE evalúa la capacidad del proceso, reduciendo la improvisación pero no elimina cualquier imprevisto",
            "Sí, si se alcanza el Nivel 1",
            "Solo si se combina con un antivirus"
        ],
        ans: 1,
        exp: "SPICE no es una garantía de producto perfecto ni un programa instalable; ayuda a reducir la improvisación y controlar los procesos."
    },
    {
        id: 10,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Cuántos niveles de capacidad define el modelo SPICE ISO/IEC 15504?",
        opts: ["3 niveles (1 al 3)", "5 niveles (1 al 5)", "6 niveles (Nivel 0 al Nivel 5)", "10 niveles"],
        ans: 2,
        exp: "SPICE define 6 niveles de capacidad numerados del 0 al 5 (Incompleto, Realizado, Gestionado, Establecido, Predecible y En Optimización)."
    },
    {
        id: 11,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué representa el Nivel 0 de capacidad en SPICE?",
        opts: [
            "Proceso Optimizado",
            "Proceso Incompleto (el proceso no se implementa o no alcanza su propósito)",
            "Proceso Gestionado",
            "Proceso Automatizado"
        ],
        ans: 1,
        exp: "El Nivel 0 indica que el proceso no está implementado adecuadamente o no logra producir sus resultados esperados."
    },
    {
        id: 12,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué caracteriza al Nivel 1 (Proceso Realizado)?",
        opts: [
            "Utiliza métricas estadísticas complejas",
            "El proceso alcanza su propósito y produce resultados, aunque dependa de la habilidad individual",
            "Está totalmente automatizado",
            "Posee una definición estándar en toda la empresa"
        ],
        ans: 1,
        exp: "El Nivel 1 logra el propósito del proceso, pero sin asegurar aún planificación o controles formales de gestión."
    },
    {
        id: 13,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es una evidencia válida utilizada por un evaluador en SPICE?",
        opts: [
            "Opiniones y rumores sin verificar",
            "Planes, registros de ejecución, matrices de trazabilidad y entrevistas contrastadas",
            "El logo de la empresa",
            "La cantidad de computadores comprados"
        ],
        ans: 1,
        exp: "Las evaluaciones SPICE se sustentan en evidencias objetivas como registros, artefactos, observaciones y entrevistas cruzadas."
    },
    {
        id: 14,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Hacia qué familia de normas evolucionó posteriormente la serie ISO/IEC 15504?",
        opts: ["Familia ISO/IEC 33000", "Familia IEEE 802", "ISO 9000 v1", "NTC 1000"],
        ans: 0,
        exp: "La serie ISO/IEC 15504 fue reemplazada y evolucionó progresivamente hacia la familia de normas ISO/IEC 33000."
    },
    {
        id: 15,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Con qué norma internacional se relaciona directamente la NTC 5420-3:2008?",
        opts: ["ISO/IEC 9126-3:2003", "ISO 27001", "CMMI Level 5", "IEEE 1012"],
        ans: 0,
        exp: "La NTC 5420-3:2008 es la adopción colombiana equivalente a la norma internacional ISO/IEC 9126-3:2003 sobre métricas internas."
    },
    {
        id: 16,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué es un 'Atributo de Proceso' en la evaluación SPICE?",
        opts: [
            "El sueldo del desarrollador",
            "Una característica específica que se analiza para determinar la capacidad de un proceso",
            "El lenguaje de programación utilizado",
            "El nombre del cliente del proyecto"
        ],
        ans: 1,
        exp: "Los atributos son características observables analizadas mediante evidencias para valorar el nivel de capacidad."
    },
    {
        id: 17,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué se requiere además de una entrevista para validar un proceso según el guión?",
        opts: [
            "Comprobar con evidencias si la explicación coincide con lo que realmente ocurre",
            "Aceptar la palabra del entrevistado sin revisar nada",
            "Grabar un video publicitario",
            "Firmar un contrato bancario"
        ],
        ans: 0,
        exp: "El guión destaca que una entrevista debe ser contrastada con registros, artefactos y observaciones reales."
    },
    {
        id: 18,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué demuestra la existencia de un documento formal de procedimiento por sí solo?",
        opts: [
            "Demuestra que el proceso está en Nivel 5",
            "No demuestra automáticamente que el proceso se aplique en el trabajo real si el equipo lo ignora",
            "Garantiza que el software no tendrá errores",
            "Demuestra que la empresa está certificada"
        ],
        ans: 1,
        exp: "Tener un procedimiento escrito no basta; debe existir evidencia de que el equipo lo conoce y lo utiliza realmente."
    },
    {
        id: 19,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "En el ciclo SPI, ¿por qué es fundamental comparar resultados con la línea base?",
        opts: [
            "Para determinar con datos comparables si la acción de mejora redujo problemas",
            "Para castigar a los programadores",
            "Para borrar los archivos viejos",
            "Para cambiar de lenguaje de programación"
        ],
        ans: 0,
        exp: "La comparación contra la línea base permite comprobar con datos si las acciones implementadas aportaron mejoras reales."
    },
    {
        id: 20,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué evalúan las métricas internas de la NTC 5420-3?",
        opts: [
            "La opinión de los clientes en redes sociales",
            "Propiedades de los artefactos (especificaciones, diseño, código) sin requerir ejecución en un entorno real",
            "Las ventas anuales de la empresa",
            "El desempeño del servidor en la nube"
        ],
        ans: 1,
        exp: "Las métricas internas evalúan características estáticas de los artefactos antes o durante el desarrollo."
    },
    {
        id: 21,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿A qué se parece el ciclo continuo de SPI según la analogía deportiva del guión?",
        opts: [
            "A comprar tenis costosos",
            "A observar el desempeño, detectar fallas, aplicar un cambio técnico y medir si mejora el resultado",
            "A jugar sin reglas de juego",
            "A cambiar de deporte cada semana"
        ],
        ans: 1,
        exp: "Mejorar procesos se parece a ajustar la técnica deportiva: diagnosticar, cambiar la práctica y medir el efecto."
    },
    {
        id: 22,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Se puede asignar una nota de capacidad a toda una empresa evaluando un solo proyecto pequeño?",
        opts: [
            "Sí, aplica para toda la empresa automáticamente",
            "No, la evaluación se limita estrictamente al alcance evaluado (procesos, equipos o unidades concretas)",
            "Sí, si la empresa paga la tarifa completa",
            "Solo si el proyecto usó Python"
        ],
        ans: 1,
        exp: "El alcance define lo evaluado; no es correcto asumir que toda una organización posee la misma capacidad de un equipo particular."
    },
    {
        id: 23,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué sucede cuando un proceso de software depende de una sola persona experta?",
        opts: [
            "Es Nivel 5 de capacidad",
            "Puede lograr resultados (Nivel 1), pero es difícil de repetir si la persona falta al no estar gestionado o estandarizado",
            "Es un proceso totalmente predecible",
            "Se garantiza la máxima calidad del producto"
        ],
        ans: 1,
        exp: "En Nivel 1 el éxito suele depender del talento individual, creando vulnerabilidades si esa persona se ausenta."
    },
    {
        id: 24,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es el propósito del proceso de pruebas de software según el guión?",
        opts: [
            "Escribir más líneas de código que el desarrollador",
            "Verificar que el producto satisface los requisitos especificados y ayudar a descubrir defectos",
            "Retrasar las entregas del proyecto",
            "Reemplazar las reuniones de diseño"
        ],
        ans: 1,
        exp: "El propósito de las pruebas es verificar el cumplimiento de requisitos especificados y detectar fallas tempranamente."
    },
    {
        id: 25,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué se logra al revisar requisitos desde etapas tempranas?",
        opts: [
            "Detectar y corregir fallas cuando son menos costosas de resolver",
            "Aumentar el costo total del proyecto",
            "Evitar hacer pruebas unitarias",
            "Eliminar la necesidad de documentación"
        ],
        ans: 0,
        exp: "Detectar imprecisiones o errores en requisitos al inicio reduce los costosos reprocesos de fases finales."
    },

    // ================= INTERMEDIO (26-50): ARQUITECTURA BIDIMENSIONAL Y ATRIBUTOS =================
    {
        id: 26,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿En qué consiste la Arquitectura Bidimensional de SPICE?",
        opts: [
            "Diseñar la pantalla en 2D y 3D",
            "Una dimensión de Proceso ('Qué se evalúa') y una dimensión de Capacidad ('Qué tan bien se realiza')",
            "Frontend y Backend",
            "Métricas de hardware y software"
        ],
        ans: 1,
        exp: "SPICE separa la Dimensión de Proceso (propósito y resultados del proceso) de la Dimensión de Capacidad (niveles y atributos)."
    },
    {
        id: 27,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué caracteriza al Nivel 2 (Proceso Gestionado) de SPICE?",
        opts: [
            "El proceso se planifica, supervisa y los productos de trabajo se controlan",
            "El proceso innova mediante Inteligencia Artificial",
            "No se realiza ninguna planificación",
            "Se aplican únicamente métricas cuantitativas avanzadas"
        ],
        ans: 0,
        exp: "En el Nivel 2 la ejecución se gestiona (se planifica y supervisa) y los productos de trabajo se identifican y controlan."
    },
    {
        id: 28,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Cuáles son los dos atributos de proceso pertenecientes al Nivel 2?",
        opts: [
            "PA 2.1 (Gestión del desempeño) y PA 2.2 (Gestión de productos de trabajo)",
            "PA 1.1 y PA 3.1",
            "PA 4.1 y PA 5.1",
            "PA 2.1 y PA 5.2"
        ],
        ans: 0,
        exp: "El Nivel 2 comprende PA 2.1 (Performance Management) y PA 2.2 (Work Product Management)."
    },
    {
        id: 29,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué diferencia al Nivel 3 (Proceso Establecido) del Nivel 2?",
        opts: [
            "El Nivel 2 es caótico",
            "En el Nivel 3 la organización cuenta con un proceso definido estándar que se puede adaptar bajo reglas comunes a varios proyectos",
            "En el Nivel 3 no se documentan los procesos",
            "El Nivel 3 requiere herramientas de pago"
        ],
        ans: 1,
        exp: "En el Nivel 2 el proyecto gestiona su trabajo particular; en el Nivel 3 existe un proceso estándar organizacional desplegado y adaptable."
    },
    {
        id: 30,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Cuáles son los atributos de proceso evaluados en el Nivel 3?",
        opts: [
            "PA 3.1 (Definición del proceso) y PA 3.2 (Despliegue del proceso)",
            "PA 2.1 y PA 2.2",
            "PA 1.1 y PA 4.1",
            "PA 3.1 y PA 5.1"
        ],
        ans: 0,
        exp: "El Nivel 3 se evalúa con los atributos PA 3.1 (Process Definition) y PA 3.2 (Process Deployment)."
    },
    {
        id: 31,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué se analiza en el Nivel 4 (Proceso Predecible)?",
        opts: [
            "Que las tareas se hagan rápido sin importar la calidad",
            "La utilización de mediciones cuantitativas para comprender y controlar el desempeño del proceso",
            "La contratación de más personal de soporte",
            "El uso de metodologías sin datos"
        ],
        ans: 1,
        exp: "En el Nivel 4 se recopilan y analizan mediciones cuantitativas para operar dentro de límites definidos y predecibles."
    },
    {
        id: 32,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué atributos de proceso corresponden al Nivel 4 de SPICE?",
        opts: [
            "PA 4.1 (Medición del proceso) y PA 4.2 (Control del proceso)",
            "PA 3.1 y PA 3.2",
            "PA 1.1 y PA 5.2",
            "PA 4.1 y PA 2.2"
        ],
        ans: 0,
        exp: "El Nivel 4 contiene los atributos PA 4.1 (Process Measurement) y PA 4.2 (Process Control)."
    },
    {
        id: 33,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es el enfoque central del Nivel 5 (Proceso en Optimización)?",
        opts: [
            "Mantener el proceso estático sin hacer cambios",
            "La mejora continua del proceso orientada por evidencias, evaluando el impacto real de cambios e innovaciones",
            "Eliminar todas las pruebas de código",
            "Comprar nuevos servidores anualmente"
        ],
        ans: 1,
        exp: "El Nivel 5 se enfoca en optimizar de forma continua y sistemática la efectividad y eficiencia del proceso a partir de evidencias."
    },
    {
        id: 34,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Cuáles son los atributos de proceso asignados al Nivel 5?",
        opts: [
            "PA 5.1 (Innovación del proceso) y PA 5.2 (Optimización del proceso)",
            "PA 4.1 y PA 4.2",
            "PA 1.1 y PA 2.1",
            "PA 3.1 y PA 5.1"
        ],
        ans: 0,
        exp: "Los atributos del Nivel 5 son PA 5.1 (Process Innovation) y PA 5.2 (Process Optimization)."
    },
    {
        id: 35,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué significa la letra 'N' en la escala de calificación de atributos N-P-L-F?",
        opts: [
            "Normal (50%)",
            "No alcanzado (Not achieved: 0% a 15% de logro)",
            "Nuevo proceso",
            "Nivel 1 completo"
        ],
        ans: 1,
        exp: "N indica 'No alcanzado': existe poca o ninguna evidencia de logro del atributo en el proceso evaluado (0 a 15%)."
    },
    {
        id: 36,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué representa la letra 'P' en la escala N-P-L-F?",
        opts: [
            "Parcialmente alcanzado (Partially achieved: >15% a 50% de logro)",
            "Proceso perfecto",
            "Pendiente de revisión",
            "Predecible"
        ],
        ans: 0,
        exp: "P representa 'Parcialmente alcanzado': hay alguna evidencia de logro, pero existen brechas significativas (>15% a 50%)."
    },
    {
        id: 37,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué rango aproximado de logro asigna la categoría 'L' (Largamente alcanzado)?",
        opts: ["0% a 15%", "15% a 50%", ">50% a 85%", ">85% a 100%"],
        ans: 2,
        exp: "La letra L (Largely achieved) indica evidencia de un logro significativo con aspectos menores por ajustar (>50% a 85%)."
    },
    {
        id: 38,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué representa la letra 'F' en la escala de calificación SPICE?",
        opts: [
            "Fallo total",
            "Completamente alcanzado (Fully achieved: >85% a 100% de logro con evidencia sistemática)",
            "Fase final",
            "Formato incompleto"
        ],
        ans: 1,
        exp: "F indica 'Completamente alcanzado': existe evidencia completa y sistemática de logro del atributo (>85% a 100%)."
    },
    {
        id: 39,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Cuántos atributos de proceso en total incluye el modelo clásico ISO/IEC 15504-2 entre los niveles 1 al 5?",
        opts: ["5 atributos", "9 atributos de proceso", "12 atributos", "20 atributos"],
        ans: 1,
        exp: "Son 9 atributos distribuidos así: PA 1.1 (Nivel 1), PA 2.1 y 2.2 (Nivel 2), PA 3.1 y 3.2 (Nivel 3), PA 4.1 y 4.2 (Nivel 4), PA 5.1 y 5.2 (Nivel 5)."
    },
    {
        id: 40,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué es la 'Gestión de Productos de Trabajo' (Atributo PA 2.2)?",
        opts: [
            "Controlar e identificar los resultados generados (planes, código, casos de prueba, informes)",
            "Comprar licencias de software",
            "Vender el producto al cliente",
            "Evaluar el sueldo de los empleados"
        ],
        ans: 0,
        exp: "PA 2.2 evalúa que los artefactos generados se identifiquen, documenten, revisen y controlen bajo requerimientos de configuración."
    },
    {
        id: 41,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Por qué el nivel de capacidad de un proceso no se obtiene promediando números matemáticos sin fundamento?",
        opts: [
            "Porque la norma exige aplicar las reglas de logro estructuradas según las evidencias de cada atributo requeridas por el modelo",
            "Porque está prohibido usar calculadoras",
            "Porque el evaluador asigna la nota según su simpatía",
            "Porque el promediado solo se usa en hardware"
        ],
        ans: 0,
        exp: "El nivel de capacidad no es un promedio arbitrario; depende del logro demostrado en los atributos requeridos por las reglas del modelo."
    },
    {
        id: 42,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿A qué se refiere la 'Adaptación del proceso' en el Nivel 3 de SPICE?",
        opts: [
            "A ignorar las normas cuando haya prisa",
            "A ajustar la definición estándar del proceso al contexto del proyecto siguiendo criterios y reglas organizacionales claras",
            "A cambiar de lenguaje de programación cada semana",
            "A eliminar las reuniones de seguimiento"
        ],
        ans: 1,
        exp: "Adaptar el proceso en Nivel 3 implica flexibilizar el proceso estándar según el tamaño o riesgo del proyecto respetando pautas definidas."
    },
    {
        id: 43,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es la diferencia entre tener cifras registradas y 'Controlar el proceso' en Nivel 4?",
        opts: [
            "No hay diferencia",
            "Tener cifras es solo acumular datos; controlar implica relacionar métricas con objetivos y reaccionar ante desviaciones fuera de límite",
            "Controlar es borrar los datos antiguos",
            "Medir es solo para la fase de pruebas"
        ],
        ans: 1,
        exp: "El Nivel 4 exige usar las métricas para analizar desviaciones y tomar acciones correctivas cuantitativas."
    },
    {
        id: 44,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "En el guión, ¿con qué se compara el tablero de mediciones del Nivel 4?",
        opts: [
            "Con un libro de cuentos",
            "Con el tablero de un automóvil: ver la velocidad ayuda, pero el conductor debe reaccionar si los límites fallan",
            "Con una pintura artística",
            "Con un control remoto de TV"
        ],
        ans: 1,
        exp: "Ver la velocidad en el tablero del auto no basta; el conductor debe comprender los límites y actuar si algo se sale de lo esperado."
    },
    {
        id: 45,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué implica el atributo PA 5.1 (Innovación del proceso)?",
        opts: [
            "Adoptar tecnologías por moda",
            "Identificar de forma sistemática oportunidades de mejora e innovaciones justificadas por datos",
            "Reescribir todo el software desde cero",
            "Eliminar a los líderes de equipo"
        ],
        ans: 1,
        exp: "PA 5.1 evalúa la capacidad de identificar e incorporar cambios e innovaciones basándose en los objetivos de la organización."
    },
    {
        id: 46,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué mide el atributo PA 1.1?",
        opts: [
            "Desempeño del proceso (si alcanza o no su propósito)",
            "La velocidad de la conexión a internet",
            "La satisfacción del gerente",
            "El número de líneas de código"
        ],
        ans: 0,
        exp: "PA 1.1 es el único atributo del Nivel 1 y mide el grado en que se logra el propósito del proceso."
    },
    {
        id: 47,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "Si un equipo ejecuta pruebas pero no guarda versiones ni actualiza los casos al cambiar los requisitos, ¿qué atributo presenta debilidad?",
        opts: ["PA 2.2 (Gestión de los productos de trabajo)", "PA 5.2", "PA 4.1", "PA 1.1"],
        ans: 0,
        exp: "Faltar al control de versiones de casos y registros evidencia fallas en la gestión de productos de trabajo (PA 2.2)."
    },
    {
        id: 48,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Puede un proceso de desarrollo estar en Nivel 3 mientras el de mantenimiento se encuentra en Nivel 1 en la misma empresa?",
        opts: [
            "No, todos deben tener el mismo nivel",
            "Sí, la evaluación bidimensional evalúa procesos individualmente generando un Perfil de Capacidad",
            "No, la norma cancela la evaluación",
            "Solo si es una empresa pública"
        ],
        ans: 1,
        exp: "Debido a la estructura por procesos, la organización obtiene un perfil donde cada proceso muestra su propio nivel de capacidad."
    },
    {
        id: 49,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué rol cumplen los 'Resultados Esperados' (Outcomes) en la Dimensión de Proceso?",
        opts: [
            "Determinan el sueldo del proyecto",
            "Son los productos o estados identificables que confirman que el propósito del proceso se ha logrado",
            "Son las horas trabajadas en la noche",
            "Son los errores no detectados"
        ],
        ans: 1,
        exp: "Los resultados esperados son las evidencias o logros verificables que demuestran el cumplimiento del propósito."
    },
    {
        id: 50,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué se debe evitar al calificar atributos con la escala N-P-L-F?",
        opts: [
            "Usar evidencias escritas",
            "Asignar calificaciones por intuición o prestigio de la empresa sin evidencias contrastadas",
            "Entrevistar al personal",
            "Revisar registros de ejecución"
        ],
        ans: 1,
        exp: "La calificación de atributos no debe basarse en impresiones o reputación, sino en evidencias comprobables de la ejecución real."
    },

    // ================= AVANZADO (51-75): MÉTRICAS INTERNAS DE PRODUCTO (NTC 5420-3) =================
    {
        id: 51,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es la ventaja de evaluar métricas internas según la NTC 5420-3 en etapas tempranas?",
        opts: [
            "Aumentar el precio final del software",
            "Detectar señales de advertencia (como complejidad excesiva) en diseños o código antes del despliegue final",
            "Evitar contratar desarrolladores",
            "Reemplazar la evaluación de procesos SPICE"
        ],
        ans: 1,
        exp: "Las métricas internas advierten sobre problemas estructurales en artefactos antes de que lleguen a producción o sean costosos de reparar."
    },
    {
        id: 52,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "Si un módulo de software presenta una complejidad interna excesivamente alta, ¿qué consecuencia puede ocurrir según la NTC 5420-3?",
        opts: [
            "El módulo será más fácil de entender",
            "Puede ser más difícil de mantener, modificar y probar, aumentando el riesgo de errores",
            "El código se ejecutará automáticamente más rápido",
            "El proceso sube de inmediato a Nivel 5"
        ],
        ans: 1,
        exp: "Módulos con alta complejidad estática suelen requerir más esfuerzo de prueba y presentan mayor propensión a fallas en modificaciones."
    },
    {
        id: 53,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Demuestra una métrica interna aislada por sí sola que un software es 'malo' o 'bueno'?",
        opts: [
            "Sí, el número lo determina todo",
            "No, una métrica aislada debe interpretarse dentro de su contexto, tipo de sistema y criterios del proyecto",
            "Sí, si la métrica es mayor a 10",
            "Solo si es evaluada en Python"
        ],
        ans: 1,
        exp: "El guión enfatiza que un número sin explicación o contexto puede conducir a conclusiones equivocadas; las métricas requieren análisis interpretativo."
    },
    {
        id: 54,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Requieren las métricas internas de la NTC 5420-3 que el software esté en ejecución real para ser medidas?",
        opts: [
            "Sí, siempre debe estar en servidores de producción",
            "No, miden propiedades de artefactos estáticos (especificaciones, estructuras, diseños o código fuente)",
            "Solo si son métricas externas",
            "Sí, requieren conexión a la nube"
        ],
        ans: 1,
        exp: "Las métricas internas evalúan las características estáticas de los artefactos sin depender de su ejecución en vivo."
    },
    {
        id: 55,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es la relación conceptual entre SPICE (ISO/IEC 15504) y la NTC 5420-3:2008?",
        opts: [
            "Son normas idénticas con distinto nombre",
            "Son enfoques complementarios: SPICE evalúa los PROCESOS de trabajo y NTC 5420-3 evalúa el PRODUCTO (artefactos)",
            "NTC 5420-3 elimina los niveles de capacidad de SPICE",
            "SPICE sustituye todas las métricas de producto"
        ],
        ans: 1,
        exp: "No son intercambiables ni opuestas; se complementan. Una evalúa cómo se trabaja (proceso) y la otra mide lo que se construye (producto)."
    },
    {
        id: 56,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué riesgo existe si se confunden las métricas de producto con los objetivos de un proceso?",
        opts: [
            "Incentivar prácticas indeseadas, como escribir líneas de código innecesarias solo para inflar un indicador",
            "Certificación automática en Nivel 5",
            "Mejora inmediata de la velocidad de red",
            "Reducción total de costos"
        ],
        ans: 0,
        exp: "Premiar exclusivamente una cifra sin contexto (como volumen de líneas) puede provocar burocracia o código basura."
    },
    {
        id: 57,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "En el guión, ¿con qué se compara la medición de la temperatura de una habitación para explicar las métricas de producto?",
        opts: [
            "Con saber si la habitación tiene luces LED",
            "El número por sí solo no indica si el ambiente es adecuado; exige conocer qué actividad se realiza y el rango esperado",
            "Con medir el tamaño de los muebles",
            "Con pintar la puerta"
        ],
        ans: 1,
        exp: "Una cifra estática necesita rango y propósito contextualizado para convertirse en información útil de toma de decisiones."
    },
    {
        id: 58,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "Si la evaluación de procesos revela revisiones de diseño deficientes y las métricas internas muestran módulos muy complejos, ¿qué debe hacerse?",
        opts: [
            "Ignorar las métricas",
            "Establecer revisiones sistemáticas de diseño y reestructurar los módulos reduciendo la complejidad",
            "Borrar el código",
            "Aumentar el precio de venta"
        ],
        ans: 1,
        exp: "La combinación de ambas herramientas permite corregir la práctica de trabajo (revisiones) y ajustar el producto (refactorización)."
    },
    {
        id: 59,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué parte de la norma ISO/IEC 15504:2006 presentaba un modelo de evaluación de procesos de ejemplo?",
        opts: ["ISO/IEC 15504-5:2006", "ISO/IEC 15504-1", "ISO 9001", "NTC 5420-1"],
        ans: 0,
        exp: "La Parte 5 de la serie (ISO/IEC 15504-5:2006) proporcionaba un modelo de evaluación de procesos de ejemplo."
    },
    {
        id: 60,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué parte de la serie ISO/IEC 15504 definía los requisitos formales para realizar una evaluación?",
        opts: ["ISO/IEC 15504-2", "ISO/IEC 15504-10", "ISO/IEC 9126", "NTC 5420-3"],
        ans: 0,
        exp: "ISO/IEC 15504-2 establecía los requisitos fundamentales obligatorios para efectuar una evaluación conforme."
    },
    {
        id: 61,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Por qué al citar ISO/IEC 15504 es necesario especificar la Parte y la Edición del documento?",
        opts: [
            "Porque es una familia de documentos con funciones distintas (requisitos, modelos, guías) que evolucionaron en el tiempo",
            "Porque es un requisito bancario",
            "Porque todas las partes dicen exactamente lo mismo",
            "Para evitar pagar derechos de autor"
        ],
        ans: 0,
        exp: "Al ser una serie de múltiples volúmenes, cada parte aborda aspectos diferentes (marco, requisitos, modelos de ejemplo)."
    },
    {
        id: 62,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué sucede si una empresa define un proceso estándar de pruebas muy completo pero en la práctica los desarrolladores lo omiten?",
        opts: [
            "Logra Nivel 3 automáticamente por tener el documento",
            "Falta evidencia de despliegue consistente (PA 3.2), por lo que no se alcanza la capacidad esperada",
            "Se certifica en Nivel 5",
            "Se le otorga la NTC 5420-3 automáticamente"
        ],
        ans: 1,
        exp: "El atributo PA 3.2 exige que el proceso no solo esté escrito, sino efectivamente desplegado y utilizado en la práctica real."
    },
    {
        id: 63,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "En el guión, ¿con qué se compara un manual de procedimientos que nadie consulta?",
        opts: [
            "Con un libro premiado",
            "Con el manual de seguridad de un laboratorio guardado en una carpeta: tenerlo guardado no demuestra que se sigan sus instrucciones",
            "Con una receta exitosa",
            "Con un certificado de garantía"
        ],
        ans: 1,
        exp: "Tener carpetas o manuales guardados no garantiza que el personal aplique las instrucciones en sus actividades diarias."
    },
    {
        id: 64,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué se examina al evaluar la Gestión del Desempeño (PA 2.1)?",
        opts: [
            "Si la ejecución del proceso se planifica, se le hace seguimiento y se ajusta para cumplir los objetivos",
            "La marca de las computadoras usadas",
            "La velocidad de la escritura en teclado",
            "El número de descansos tomados"
        ],
        ans: 0,
        exp: "PA 2.1 evalúa la capacidad de planificar la ejecución, monitorear el avance y ajustar imprevistos en el proyecto."
    },
    {
        id: 65,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué permite asegurar la trazabilidad entre requisitos y casos de prueba?",
        opts: [
            "Saber qué requisitos están verificados por pruebas y controlar el impacto cuando un requisito cambia",
            "Hacer que el código sea más corto",
            "Evitar hacer reuniones de equipo",
            "Eliminar la necesidad de base de datos"
        ],
        ans: 0,
        exp: "La trazabilidad garantiza que cada función tenga sus pruebas correspondientes y permite medir la cobertura de cambios."
    },
    {
        id: 66,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué rol cumple la Alta Dirección en la implementación de evaluación y mejora de procesos?",
        opts: [
            "Solo firmar cheques de pago",
            "Apoyar el esfuerzo, asignar recursos, promover una cultura sin castigos y evitar que se vuelva un trámite burocrático",
            "Escribir todo el código fuente",
            "Realizar las pruebas unitarias"
        ],
        ans: 1,
        exp: "Sin el respaldo de la dirección y la asignación de recursos, las iniciativas SPI se convierten en trámites aislados sin valor."
    },
    {
        id: 67,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿En qué consiste el riesgo de 'Burocratizar' el trabajo en el contexto de calidad?",
        opts: [
            "Trabajar demasiado rápido",
            "Crear formatos y documentos excesivos que nadie consulta y no aportan al control de riesgos ni a la coordinación",
            "Usar computadores portátiles",
            "Automatizar el testing"
        ],
        ans: 1,
        exp: "Burocratizar es llenar la empresa de papelería sin que esos registros ayuden a tomar decisiones o reducir riesgos reales."
    },
    {
        id: 68,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué sucede cuando un equipo siente que las evaluaciones de proceso se usan para buscar culpables y castigar?",
        opts: [
            "El equipo mejora su rendimiento",
            "Se tiende a ocultar errores o producir documentos solo para aparentar cumplimiento formal",
            "El proceso sube inmediatamente a Nivel 4",
            "Se eliminan los defectos del código"
        ],
        ans: 1,
        exp: "Una cultura punitiva destruye la transparencia; el equipo oculta las fallas en lugar de usarlas como insumo de aprendizaje."
    },
    {
        id: 69,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "Al evaluar una automatización de pruebas en Nivel 5, ¿por qué debe revisarse tanto la eficiencia como los riesgos?",
        opts: [
            "Porque si reducir el tiempo de prueba provoca que no se detecten fallas críticas, la mejora no es exitosa",
            "Porque la automatización siempre es perfecta",
            "Porque los robots no cometen errores",
            "Porque la norma prohíbe automatizar"
        ],
        ans: 0,
        exp: "Una mejora debe ser equilibrada: acelerar la ejecución descuidando la cobertura de defectos perjudica la calidad global."
    },
    {
        id: 70,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Cuáles son las 4 categorías exactas de la escala de logro de atributos?",
        opts: [
            "No alcanzado (N), Parcialmente alcanzado (P), Largamente alcanzado (L), Completamente alcanzado (F)",
            "Nulo, Promedio, Listo, Final",
            "Bajo, Medio, Alto, Excelente",
            "Nivel 1, Nivel 2, Nivel 3, Nivel 4"
        ],
        ans: 0,
        exp: "Las siglas corresponden a Not achieved (N), Partially achieved (P), Largely achieved (L) y Fully achieved (F)."
    },
    {
        id: 71,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué es el Perfil de Capacidad de una organización?",
        opts: [
            "El currículum vitae del gerente",
            "El conjunto de resultados que muestra los niveles de capacidad alcanzados en cada uno de los procesos evaluados",
            "La lista de computadoras de la empresa",
            "El estado de cuenta bancario"
        ],
        ans: 1,
        exp: "El perfil resume el nivel obtenido proces por proceso, identificando fortalezas y brechas organizacionales."
    },
    {
        id: 72,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué se examina en el atributo PA 3.1 (Definición del proceso)?",
        opts: [
            "Si existe una descripción estándar del proceso que incluya actividades, roles, artefactos y criterios de entrada/salida",
            "La velocidad de descarga de archivos",
            "El precio de los servidores",
            "La puntualidad del equipo"
        ],
        ans: 0,
        exp: "PA 3.1 verifica que la organización mantenga guías y definiciones estándar para la realización de sus procesos."
    },
    {
        id: 73,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué evalúa el atributo PA 4.2 (Control del proceso)?",
        opts: [
            "La utilización de datos cuantitativos para tomar acciones y corregir desviaciones del desempeño esperadas",
            "El control de asistencia de los empleados",
            "El uso de contraseñas de seguridad",
            "La compra de insumos de oficina"
        ],
        ans: 0,
        exp: "PA 4.2 analiza cómo los datos de medición sirven para mantener el proceso dentro de límites de desempeño estables."
    },
    {
        id: 74,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué evalúa el atributo PA 5.2 (Optimización del proceso)?",
        opts: [
            "La efectividad de los cambios implementados para asegurar que cumplan los objetivos cuantitativos de mejora",
            "El reemplazo total de los empleados",
            "La eliminación de todas las reuniones",
            "El cambio del nombre de la empresa"
        ],
        ans: 0,
        exp: "PA 5.2 asegura que las acciones de optimización se evalúen cuantitativamente para confirmar que resuelven las causas raíz."
    },
    {
        id: 75,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "En el guión, ¿qué se recomienda antes de intentar extender una evaluación a toda la empresa?",
        opts: [
            "Comenzar por los procesos más críticos y seleccionar un conjunto reducido de métricas útiles",
            "Certificar todos los procesos el primer día",
            "Comprar 100 herramientas distintas",
            "Despedir al personal con dudas"
        ],
        ans: 0,
        exp: "La implementación práctica sugiere priorizar procesos clave y métricas de alto impacto antes de masificar los modelos."
    },

    // ================= EXPERTO / SENIOR (76-100): CASO PRÁCTICO, ANÁLISIS E INTEGRACIÓN =================
    {
        id: 76,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "En el caso práctico de la plataforma de matrículas universitarias, ¿qué problema presentó el proceso de pruebas al ser evaluado con SPICE?",
        opts: [
            "No realizaban pruebas de ningún tipo",
            "Realizaban pruebas pero la planificación y control de productos de trabajo eran inconsistentes y los casos no estaban actualizados",
            "El servidor de producción se incendió",
            "Los desarrolladores no sabían usar teclados"
        ],
        ans: 1,
        exp: "La evaluación identificó que ejecutaban pruebas, pero carecían de planificación consistente, control de versiones y trazabilidad de evidencias."
    },
    {
        id: 77,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "En el mismo caso práctico, ¿qué descubrió el análisis de métricas internas (NTC 5420-3) sobre los módulos con fallas frecuentes?",
        opts: [
            "Que los módulos eran demasiado cortos",
            "Que ciertos componentes (pagos y validación de requisitos) presentaban una alta complejidad interna y estructura difícil de modificar",
            "Que el código estaba escrito en inglés",
            "Que los módulos no tenian líneas de código"
        ],
        ans: 1,
        exp: "La métrica interna señaló complejidad estática elevada en los módulos críticos, facilitando la identificación de cuellos de botella de diseño."
    },
    {
        id: 78,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "Según el caso del guión, ¿cuál fue el plan de acción integral diseñado tras combinar SPICE y NTC 5420-3?",
        opts: [
            "Cancelar la plataforma universitaria",
            "Mejorar la trazabilidad requisitos-pruebas, controlar versiones de casos, revisar módulos complejos y definir indicadores de seguimiento",
            "Trabajar fines de semana sin registrar cambios",
            "Cambiar todos los servidores a otra red"
        ],
        ans: 1,
        exp: "La solución combinó mejoras operacionales de proceso (trazabilidad y control) con refactorizaciones del producto en los módulos complejos."
    },
    {
        id: 79,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "Si tras aplicar las mejoras en el caso práctico disminuyen los defectos tardíos sin disparar los costos, ¿qué demuestra esa evidencia?",
        opts: [
            "Demuestra que el cambio fue afortunado",
            "Aporta evidencia sólida de avance e impacto positivo del programa de mejora comparado contra la línea base",
            "Demuestra que ya no se requiere probar",
            "Demuestra que el software es perfecto"
        ],
        ans: 1,
        exp: "Reducir defectos finales manteniendo eficiencia económica confirma cuantitativamente la validez de las acciones de mejora."
    },
    {
        id: 80,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es la principal lección sobre evaluar con evidencias en lugar de opiniones?",
        opts: [
            "Decir que una empresa 'trabaja bien' no explica qué hace ni lo demuestra; las evidencias convierten impresiones en datos para decidir",
            "Las opiniones del cliente valen más que los datos",
            "Las evidencias solo sirven para auditorías bancarias",
            "Los datos no importan en el desarrollo moderno"
        ],
        ans: 0,
        exp: "Las afirmaciones abstractas no justifican mejoras; la evaluación formal requiere registros y evidencias contrastadas."
    },
    {
        id: 81,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué diferencia existe en la vigencia normativa entre utilizar ISO/IEC 15504:2006 como estudio académico o en un proyecto formal actual?",
        opts: [
            "No hay ninguna diferencia",
            "15504:2006 tiene valor histórico y conceptual, pero para proyectos actuales se debe verificar la familia ISO/IEC 33000 vigente",
            "ISO 15504 está prohibida mundialmente",
            "ISO 33000 es solo para productos de hardware"
        ],
        ans: 1,
        exp: "La serie 15504 evolucionó a la familia ISO/IEC 33000; un entorno profesional formal debe consultar los catálogos vigentes."
    },
    {
        id: 82,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Por qué un nivel alto de capacidad en el proceso de pruebas no elimina la necesidad de controlar la calidad de los requisitos?",
        opts: [
            "Porque si los requisitos son ambiguos, las pruebas verificarán un comportamiento incorrecto desde el origen",
            "Porque la norma prohíbe probar requisitos",
            "Porque los requisitos no forman parte del software",
            "Porque las pruebas se hacen después de vender el producto"
        ],
        ans: 0,
        exp: "Procesos organizados en una etapa no compensan fallas fundamentales en etapas previas como la toma de requisitos."
    },
    {
        id: 83,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué representa el concepto de 'Línea Base' en un proyecto SPI?",
        opts: [
            "La primera línea del código fuente",
            "La descripción y medición del desempeño actual antes de aplicar cambios, usada para comparar resultados futuros",
            "La firma del contrato de trabajo",
            "El límite de memoria RAM del servidor"
        ],
        ans: 1,
        exp: "La línea base fija la foto inicial del desempeño para verificar empíricamente si la mejora surtió efecto."
    },
    {
        id: 84,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Por qué el Nivel 0 no implica necesariamente que la empresa no realice ninguna tarea de desarrollo?",
        opts: [
            "Porque pueden realizarse tareas improvisadas o aisladas pero sin alcanzar el propósito de manera consistente ni completa",
            "Porque Nivel 0 significa que la empresa cerró",
            "Porque el Nivel 0 exige automatización",
            "Porque el Nivel 0 es para proyectos finalizados"
        ],
        ans: 0,
        exp: "En Nivel 0 puede haber actividades intermitentes, pero los resultados no se obtienen de forma sistemática o suficiente."
    },
    {
        id: 85,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué se debe hacer si una acción de mejora implementada en Nivel 5 no arroja los resultados esperados tras ser evaluada?",
        opts: [
            "Ocultar los datos a la directiva",
            "Analizar las causas, revisar la estrategia introducida y hacer los ajustes necesarios o revertir la acción",
            "Subir la nota de capacidad de forma manual",
            "Dar por terminado el proceso de software"
        ],
        ans: 1,
        exp: "El Nivel 5 se basa en ciclos de aprendizaje: si un experimento de mejora falla, los datos orientan su reformulación."
    },
    {
        id: 86,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "Si se compara la gestión de pruebas con una cocina de restaurante (según el guión), ¿qué equivaldría a Nivel 2?",
        opts: [
            "Cocinar sin receta y de memoria",
            "Organizar ingredientes, tiempos, definir responsabilidades y confirmar que la información de la comanda sea la correcta",
            "Crear una franquicia multinacional de restaurantes",
            "Medir la temperatura atómica del horno"
        ],
        ans: 1,
        exp: "Organizar la preparación, controlar insumos y coordinar responsabilidades equivale a la planificación y control de Nivel 2."
    },
    {
        id: 87,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿A qué equivale el Nivel 3 en la analogía de la receta de cocina del guión?",
        opts: [
            "Documentar un método estándar que distintas sedes o cocineros pueden seguir y adaptar bajo reglas comunes",
            "Cocinar cada día un plato completamente diferente sin anotar nada",
            "Comprar comida rápida ya hecha",
            "Cerrar la cocina"
        ],
        ans: 0,
        exp: "El Nivel 3 establece la receta estandarizada y desplegada para que la calidad sea consistente entre distintos equipos."
    },
    {
        id: 88,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Cómo se relacionan los indicadores y las evidencias en la Dimensión de Proceso?",
        opts: [
            "Los indicadores orientan al evaluador sobre qué evidencias buscar para confirmar si se producen los resultados esperados",
            "Los indicadores reemplazan la necesidad de recopilar evidencias",
            "Las evidencias se inventan a partir de los indicadores",
            "No tienen ninguna relación"
        ],
        ans: 0,
        exp: "Los indicadores actúan como guías para rastrear pruebas tangibles (artefactos, registros) en la evaluación."
    },
    {
        id: 89,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es el error de concluir que toda una empresa tiene Nivel 4 evaluando solo a su mejor equipo?",
        opts: [
            "Falta de cobertura del alcance: la capacidad debe sustentarse en evidencias representativas de las unidades dentro del alcance definido",
            "No hay ningún error, es la práctica recomendada",
            "La norma obliga a promediar con las empresas competidoras",
            "El único error es no usar gráficos de colores"
        ],
        ans: 0,
        exp: "Generalizar los logros de un equipo sobresaliente a toda la organización invalida el alcance real de la evaluación."
    },
    {
        id: 90,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Por qué no se debe adoptar una herramienta o norma de calidad únicamente 'por moda'?",
        opts: [
            "Porque la innovación debe responder a necesidades justificadas por datos y aportar valor real al desempeño o al producto",
            "Porque las modas son ilegales en la ingeniería",
            "Porque las herramientas modernas siempre fallan",
            "Porque la norma prohíbe actualizar tecnología"
        ],
        ans: 0,
        exp: "Adoptar herramientas sin diagnosticar la causa raíz produce gasto financiero sin resolver las deficiencias del proceso."
    },
    {
        id: 91,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué papel juega la trazabilidad cuando cambia un requisito a mitad de un proyecto gestionado (Nivel 2)?",
        opts: [
            "Permite registrar el cambio, analizar su impacto, actualizar casos de prueba asociados y verificar la versión correcta",
            "Obliga a borrar todo el proyecto y empezar de nuevo",
            "Ignorar el cambio para cumplir el horario",
            "Modificar el código en secreto sin documentar"
        ],
        ans: 0,
        exp: "La gestión de cambios y trazabilidad evita incoherencias entre la especificación, el código y las pruebas ejecutadas."
    },
    {
        id: 92,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Por qué la NTC 5420-3 complementa a SPICE sin sustituir la necesidad de realizar pruebas de software?",
        opts: [
            "Porque las métricas internas miden propiedades estáticas de artefactos, pero no sustituyen la verificación dinámica del comportamiento del sistema",
            "Porque la NTC 5420-3 es solo un borrador",
            "Porque SPICE exige eliminar las pruebas de integración",
            "Porque los clientes no leen métricas"
        ],
        ans: 0,
        exp: "Analizar el código o diseño (estático) detecta anomalías estructurales, pero la ejecución de pruebas (dinámico) confirma la funcionalidad."
    },
    {
        id: 93,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué se requiere para que un proceso alcance la calificación de 'Completamente alcanzado' (F) en un atributo?",
        opts: [
            "Demostrar evidencia sistemática y completa del logro del atributo entre un 85% y 100% sin brechas significativas",
            "Pagar la certificación en dólares",
            "Contar con 100 empleados en el área de QA",
            "Demostrar que no se cometió ningún error en 5 años"
        ],
        ans: 0,
        exp: "La calificación F implica un dominio y cumplimiento sistemático, sustentado en evidencias sólidas de la práctica examinada."
    },
    {
        id: 94,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "En el guión, ¿qué diferencia se señala entre un proceso 'Gestionado' (Nivel 2) y un proceso 'Establecido' (Nivel 3)?",
        opts: [
            "En el Nivel 2 el proyecto gestiona su trabajo particular; en el Nivel 3 se aplica un proceso estándar definido a nivel organizacional",
            "El Nivel 2 usa mediciones estadísticas y el Nivel 3 no",
            "El Nivel 3 es exclusivo para desarrollo web",
            "No hay diferencia, son sinónimos"
        ],
        ans: 0,
        exp: "Nivel 2 logra control a nivel de proyecto local; Nivel 3 institucionaliza una metodología estándar para la organización."
    },
    {
        id: 95,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es el peligro de realizar comparaciones entre métricas obtenidas con métodos o herramientas distintas?",
        opts: [
            "Producir datos no comparables que distorsionen el análisis y lleven a decisiones erróneas",
            "Aumentar la velocidad del procesador",
            "Mejorar automáticamente la calidad del código",
            "Obtener una certificación ISO de inmediato"
        ],
        ans: 0,
        exp: "Para comparar indicadores de forma válida es imprescindible mantener consistencia en los criterios de recolección y medición."
    },
    {
        id: 96,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué aspecto debe cuidarse al adaptar un proceso estándar (Nivel 3) a un proyecto pequeño?",
        opts: [
            "Asegurar que la adaptación respete las reglas organizacionales y no se convierta en una improvisación informal",
            "Eliminar todas las actividades de verificación",
            "Impedir que el proyecto tenga entregables",
            "Aumentar el número de reuniones al triple"
        ],
        ans: 0,
        exp: "Tailoring (adaptación) en Nivel 3 permite simplificar artefactos para proyectos pequeños sin perder los controles mínimos del estándar."
    },
    {
        id: 97,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué persigue el atributo PA 4.1 (Medición del proceso)?",
        opts: [
            "Recopilar y almacenar datos cuantitativos de desempeño alineados con los objetivos del proceso",
            "Contar las horas de llegada del personal",
            "Medir la temperatura de la oficina",
            "Evaluar las opiniones personales de los usuarios"
        ],
        ans: 0,
        exp: "PA 4.1 establece la infraestructura de medición identificando qué medir, cómo medir y registrando datos de forma sistemática."
    },
    {
        id: 98,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Cómo ayuda la trazabilidad entre defectos y requisitos a la mejora continua (SPI)?",
        opts: [
            "Permite identificar si los defectos recurrentes provienen de ambigüedades en la fase de requisitos y ajustar esa práctica",
            "Haciendo que los requisitos se borren automáticamente",
            "Garantizando que no existan cambios en el contrato",
            "Evitando que los clientes hagan preguntas"
        ],
        ans: 0,
        exp: "Analizar el origen de los defectos orienta las acciones de mejora directamente hacia las etapas que generan las inconsistencias."
    },
    {
        id: 99,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "En conclusión, ¿cuál es el verdadero beneficio de implementar un marco como SPICE junto con la NTC 5420-3?",
        opts: [
            "Obtener mayor visibilidad, control de riesgos y tomar decisiones de mejora basadas en evidencias para aportar valor real",
            "Llenar carpetas de documentos para aprobar auditorías externas",
            "Aumentar la burocracia dentro de los equipos de desarrollo",
            "Reemplazar a los líderes de proyecto por inspectores"
        ],
        ans: 0,
        exp: "El valor estratégico radica en comprender el desempeño real de la organización, mitigar riesgos y tomar decisiones basadas en datos."
    },
    {
        id: 100,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué resumen sintético del guión define la búsqueda constante de la calidad en ingeniería de software?",
        opts: [
            "La calidad no es buscar un número alto ni llenar documentos; es comprender cómo se trabaja, medir lo pertinente y comprobar que las mejoras funcionen",
            "La calidad es comprar la computadora más cara del mercado",
            "La calidad consiste en no hacer pruebas y confiar en los programadores",
            "La calidad depende únicamente de utilizar un lenguaje moderno"
        ],
        ans: 0,
        exp: "Como concluye el guión de la exposición, la calidad requiere entender los procesos, medir con criterio y validar que las acciones aporten valor."
    }
];
