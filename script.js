// Arreglo para almacenar las preguntas
let preguntas = [];

q(1,"Circuito Integrado Hall en un Sistema de Encendido Hall","Siempre","Nunca","En modelos modernos sí","En modelos modernos no","a");
q(2,"Julio como Unidad de Medida","Resistencia eléctrica","Potencia eléctrica","Intensidad de corriente","Energía eléctrica","d");
q(3,"Oscilograma de Secundario en Encendido Transistorizado","Tensión de secundario se hace cero","Tensión de 5V","Tensión de 12V","Caída brusca de tensión","a");
q(4,"Número 15 en Circuitos Automotrices","Positivo directo de batería","Masa","Salida de relé","Positivo después de llave de contacto","d");
q(5,"Corriente Producida en Devanados del Estator","Corriente alterna monofásica","Corriente alterna trifásica","Corriente continua rectificada","Alterna monofásica o trifásica según alternador","d");
q(6,"Misión del Circuito de Intermitencias","Indicar a conductores y peatones que se cambiará de dirección","Indicar solo a conductores","Indicar solo a peatones","Indicar que el vehículo frena","a");
q(7,"Reducción entre piñón motor de arranque y corona","1/8 a 1/15","1/4 a 1/15","1/8 a 1/20","1/10 a 1/20","d");
q(8,"Resistencia calefactora de sonda Lambda","Variable con tensión","Variable con luz","Coeficiente temperatura negativo","Coeficiente temperatura positivo","d");
q(9,"Verificación de señal de sensor Hall","-y+","-yo","Oy+","Indiferente","b");
q(10,"Definición del motor de arranque","Mecánica a eléctrica","Eléctrica a mecánica","Eléctrica a química","Química a mecánica","b");
q(11,"Conector diagnóstico del vehículo","Conector de masa","Conector positivo","Conector ABC","Conector OBD","d");
q(12,"Duración de un ciclo de la red doméstica 50Hz","50 segundos","0,020 s","25 segundos","100 segundos","b");
q(13,"Grupo del hierro según permeabilidad","Diamagnético","Ferromagnético","No magnético","Paramagnético","b");
q(14,"Dedo pulgar regla mano derecha","Movimiento del conductor","No indica nada","Flujo magnético","Dirección de corriente","a");
q(15,"Medición tensión batería indica estado","Sí, tensión correcta indica batería buena","Depende del tipo de batería","Solo indica carga","Depende de temperatura","c");
q(16,"Aumentar longitud del cable sobre resistencia","Disminuye","Aumenta","No se modifica","Depende del material","b");
q(17,"Inducción corriente bobinas perpendiculares","Siempre","Solo si muchas espiras","No se induce","Depende del voltaje","c");
q(18,"Medición resistencia con ohmímetro","Con corriente","Desconectado de corriente","Depende de la resistencia","Con amperímetro en paralelo","b");
q(19,"Escala Voltios/División incorrecta osciloscopio","No apreciar señal","Onda desfilando","Osciloscopio no mide","Imágenes juntas","a");
q(20,"Suma resistencias en paralelo","Inversa de resultante suma inversas","Inversa suma resistencias","Suma resistencias","Producto dividido","a");
q(21,"Emisión de luz diodo LED","Polaridad inversa","Polaridad directa","Ambas ciertas","Ninguna","b");
q(22,"Función tiristor","Resistencia","Amplificador","Interruptor","Fuente","c");
q(23,"Definición frecuencia","Tiempo ciclo completo","Número de ciclos por segundo","Distancia pico a pico","Tiempo dos ciclos","b");
q(24,"Período de señal eléctrica","Tiempo ciclo completo","Número ciclos por segundo","Distancia pico a pico","Frecuencia angular","a");
q(25,"Tensión nominal batería","Bornes sin circuito","Bornes descargada","Bornes conectada","Indicada por fabricante","d");
q(26,"Diodo no conduce polarizado","Directamente","Inversamente","Insuficientemente","Al revés","b");
q(27,"Líneas de fuerza vs intensidad campo magnético","No influye","Más líneas menos intenso","Más líneas más intenso","No tiene relación","c");
q(28,"Conexión amperímetro circuito","Depende","En serie","En paralelo","Serie-paralelo","b");
q(29,"Tensión ruptura diodo Zener","Disminuye al aumentar corriente","Aproximadamente constante","Destruye diodo","No hay ruptura","b");
q(30,"Parte móvil alternador","Inducido","Inductor","Ambos","Ninguno","b");
q(31,"Norma general instalación eléctrica","Desconectar negativo batería","Usar destornillador plano","Unir cables altavoz con RCA","Cable positivo cerca del amplificador","a");
q(32,"Número positivo después llave contacto","30","31","75","15","d");
q(33,"Anchura haz luz halógena","100-150 m","50-150 m","30-50 m","Menos de 30 m","c");
q(34,"Causa polarización pilas","Exceso temperatura","Exceso corriente","Humedad","Acumulación hidrógeno","d");
q(35,"Ley fundamental electricidad estática","Ley de Ohm","Ley de Coulomb","Efecto Joule","Ninguna","b");
q(36,"Unidad de fuerza","Newton","Amperio","Vatio","Culombio","a");
q(37,"Unidad de inducción magnética","Weber","Amperio/m","Newton","Tesla","d");
q(38,"Transistor importante para","Amplificar señales débiles","Rectificar tensión","Regular tensión","Emitir luz","a");
q(39,"Zonas de dopado transistor","1","2","3","4","c");
q(40,"Electrólito batería alcalina","Ácido sulfúrico diluido","Hidróxido níquel","Hidróxido potásico en agua","Hidróxido cadmio","c");
q(41,"Placas batería plomo-ácido","Ambas plomo-calcio","Ambas peróxido plomo","Positivas peróxido, negativas plomo-calcio","Negativas peróxido, positivas plomo-calcio","c");
q(42,"Puntos de masa vehículo","Localizados en planos fabricante","Al azar","Con polímetro","Solo borne negativo","a");
q(43,"Resistencia bobinas inductoras estator","No","Amperímetro entre B+ y borne apagado","Pinza amperimétrica","Polímetro AC","b");
q(44,"Proceso de trabajo batería","Inducción mutua","Autoinducción","Electrólisis","Ninguna","c");
q(45,"Unidad medida resistencia bobina claxon","Voltios","Amperios","Ohmios","Vatios","c");
q(46,"Unidad resistividad material","Ohmios","Ohmios·m/mm²","Ohmios·mm²/m","Ohmios·mm²","c");
q(47,"Borne relé corriente directa","86","85","30","87","c");
q(48,"Desconectar batería para alternador","No salvo regulador electrónico","Sí, seguridad","Sí salvo regulador electrónico","b","b");
q(49,"Generar f.e.m. sin cambio de intensidad de campo","Depende material","Si hay suficientes líneas","Sí","No","d");
q(50,"Aparatos para comprobar batería","Densímetro, ohmetro, osciloscopio","Voltímetro, amperímetro, pickup","Densímetro, ohmetro, descargador rápido","Densímetro, voltímetro, descargador rápido","d");
q(51,"Elementos comunes emergencias e intermitencias","Ninguno","Todos","Interruptores y fusibles","Todos menos interruptor, propio interruptor","d");
q(52,"Qué regular en alternador","Intensidad","Intensidad y tensión","Corriente retorno y voltaje","Tensión","d");
q(53,"Qué es alternador","Transforma eléctrica a mecánica AC","Eléctrica a mecánica CC","Mecánica a eléctrica AC","Mecánica a eléctrica CC","c");
q(54,"Qué mide luxómetro","Tensión","Intensidad eléctrica","Intensidad lumínica","Potencia faro","c");
q(55,"Mediciones osciloscopio","Intensidad","Resistencia","Potencia","Tensión/tiempo","d");
q(56,"Qué dice efecto Joule","Resistencia proporcional a resistividad y longitud","Calor proporcional inverso resistencia y corriente al cuadrado","Calor proporcional a resistencia, corriente al cuadrado y tiempo","Calor inverso a resistencia y corriente al cuadrado","c");
q(57,"1ª Ley Kirchhoff","Producto corrientes nudo=0","Intensidades no coinciden","Suma intensidades en nudo=0","Suma intensidades=unidad","c");
q(58,"2ª Ley Kirchhoff","Producto corrientes=0","Suma f.e.m.=ΣR·I","Suma intensidades=0","Suma f.e.m.=ΣR·I","d");
q(59,"Ley de Lenz","Corriente inducida opuesta al flujo que la genera","Corriente inversa a resistencia","Corriente inducida se suma al flujo","a","a");
q(60,"Dirección líneas de fuerza","Corriente","Campo magnético","Nada","Corriente o campo según material","b");
q(61,"Lámparas bilux","Doble filamento","Un filamento","H1","Descarga gas","a");
q(62,"Resistencia cables bujías","30 kΩ/m","10 kΩ/m","20 kΩ/m","Sin resistencia","a");
q(63,"Quién cuantificó fuerza campo magnético","Laplace","Oersted","Fleming","Ampere","a");
q(64,"Silicio según conductibilidad","Aislante","Semiconductor","Conductor","Ninguno","b");
q(65,"Motor arranque actúa como generador","No","Depende revoluciones","Sí, fuerza electromotriz suma","Sí, f.e.m. opuesta","d");
q(66,"Corriente grande en diodo polarización","Directa","Inversa","Escasa","Al revés","a");
q(67,"Flancos sensor Hall no vertical","Cambiar amplificador","Cambiar sensor","Cambiar bobina","Puesta a punto","b");
q(68,"Contacto tipo Reed relé","Dos láminas ferromagnético","Una lámina paramagnético","Dos láminas diamagnético","Una lámina diamagnético","a");
q(69,"Espacio acción imán","Permeabilidad magnética","Campo magnético","Intensidad eléctrica","No existe","b");
q(70,"Fluido frigorífico peligroso","Congelación","Gases tóxicos","Asfixia","Todas anteriores","d");
q(71,"Flujo solenoide aumenta","Más espiras","Menos espiras","Invertir corriente","No metal","a");
q(72,"Motor de arranque se basa en","Ley Ohm","Ley Kirchhoff","Ley Maxwell","Ley Fleming","d");
q(73,"Henrio unidad","Frecuencia","Inductancia","Pulsación","Período","b");
q(74,"Herzio unidad","Frecuencia","Inductancia","Pulsación","Período","a");
q(75,"Maxwell unidad","Flujo magnético","Inducción magnética","FEM máx alternador","FEM eficaz alternador","a");
q(76,"Weber unidad","Flujo magnético","FEM","Campo magnético","Inducción","a");
q(77,"Ley Faraday","FEM inducida proporcional a variación flujo","FEM constante","Corriente alterna","FEM = resistencia·corriente","a");
q(78,"Amperímetro se coloca","En paralelo","En serie","En derivación","Indiferente","b");
q(79,"Voltímetro se coloca","En paralelo","En serie","En derivación","Indiferente","a");
q(80,"Resistencia eléctrica aumenta","Temperatura","Longitud disminuye","Área aumenta","Ninguna","a");
q(81,"Capacitor bloquea","Corriente alterna","Corriente continua","Tensión","Fuerza","b");
q(82,"Inductor bloquea","Corriente continua","Corriente alterna","Voltaje","Fuerza","b");
q(83,"Ley Ohm","V=IR","V=I/R","R=V/I²","I=V²/R","a");
q(84,"Ley Joule","Calor=R·I²·t","Calor=V·I","Calor=V²/R","Todas","d");
q(85,"Tierra vehículo conecta","Borne negativo","Borne positivo","Chasis","Batería","c");
q(86,"Relé protege circuito","Sobrecorriente","Sobrevoltaje","Cortocircuito","Temperatura","a");
q(87,"Fusible protege","Sobrecorriente","Sobrevoltaje","Cortocircuito","Temperatura","a");
q(88,"Transformador aumenta voltaje","Con más vueltas secundario","Con menos vueltas secundario","Depende intensidad","No cambia","a");
q(89,"Transformador disminuye voltaje","Más vueltas primario","Más vueltas secundario","Igual vueltas","No cambia","b");
q(90,"Alternador produce","Corriente alterna","Corriente continua","Voltaje constante","Energía mecánica","a");
q(91,"Puente rectificador convierte","AC a DC","DC a AC","AC a AC","DC a DC","a");
q(92,"Filtro capacitor sirve para","Suavizar voltaje","Aumentar corriente","Disminuir resistencia","Proteger fusible","a");
q(93,"Regulador alternador","Mantener voltaje estable","Aumentar corriente","Disminuir resistencia","Incrementar temperatura","a");
q(94,"Batería arranque capacidad","Ah","V","W","Ω","a");
q(95,"Motor de arranque gira","Mecánica a eléctrica","Eléctrica a mecánica","Química a eléctrica","Mecánica a química","b");
q(96,"Bujía genera","Chispa alta tensión","Baja tensión","Corriente continua","Corriente alterna","a");
q(97,"Sensor temperatura motor","Termistor","Potenciómetro","Fotocelda","Halla sensor","a");
q(98,"Sensor oxígeno","Lambda","O2","CO","CO2","a");
q(99,"Inyector","Electroválvula","Motor paso a paso","Resistencia","Inductor","a");
q(100,"Válvula EGR","Recircula gases","Aumenta oxígeno","Controla aceite","Controla agua","a");
q(101,"Velocidad sonido vehículo","343 m/s","300 m/s","320 m/s","330 m/s","a");
q(102,"Par motor","Fuerza x brazo","Potencia x tiempo","Corriente x voltaje","Resistencia x corriente","a");
q(103,"Potencia motor","Torque x RPM","Torque x velocidad","Fuerza x distancia","Corriente x voltaje","b");
q(104,"Sistema inyección","Gestiona combustible","Gestiona aceite","Gestiona refrigerante","Gestiona frenos","a");
q(105,"ABS evita","Bloqueo ruedas","Frenado rápido","Velocidad alta","Desgaste llantas","a");
q(106,"Airbag se activa","Choque frontal","Curva cerrada","Frenado brusco","Lluvia","a");
q(107,"Dirección asistida","Hidráulica o eléctrica","Solo hidráulica","Solo eléctrica","Neumática","a");
q(108,"Freno de disco","Pastillas presionan disco","Zapatas presionan tambor","Tambor presiona pastilla","Disco gira libre","a");
q(109,"Freno de tambor","Zapatas presionan tambor","Pastillas presionan disco","Disco presiona zapata","Tambor libre","a");
q(110,"Suspensión","Amortigua vibraciones","Frena motor","Gira ruedas","Enciende luces","a");
q(111,"Amortiguador","Controla rebote","Controla velocidad","Controla temperatura","Controla aceite","a");
q(112,"Neumático adecuado","Presión correcta y desgaste uniforme","Cualquier presión","Cualquier desgaste","Solo marca","a");
q(113,"Batería no cargando","Alternador dañado","Bujías gastadas","Aceite bajo","Filtro sucio","a");
q(114,"Fallo arranque","Batería baja","Luz apagada","Neumático plano","Aceite bajo","a");
q(115,"Sensor presión aceite","Indica baja presión","Indica alta presión","Indica temperatura","Indica voltaje","a");
q(116,"Sensor nivel combustible","Resistencia variable","Corriente constante","Voltaje constante","Inductancia","a");
q(117,"Sensor velocidad","Generador pulso o efecto Hall","Luz led","Potenciómetro","Interruptor","a");
q(118,"Sistema encendido moderno","Transistorizado con Hall","Magneto","Bujía vieja","Bobina simple","a");
q(119,"Sistema carga vehículo","Alternador, regulador, batería","Motor, bujía, alternador","Freno, luces, aceite","Neumático, suspensión, alternador","a");
q(120,"Sistema arranque","Batería, motor arranque, relé, cableado","Alternador, batería, bujía","Frenos, batería, motor","Aceite, batería, arranque","a");
q(121,"Bobina de encendido","Transforma 12V a alta tensión","Transforma alta a baja","Transforma AC a DC","Genera corriente continua","a");
q(122,"Distribuidor clásico","Distribuye alta tensión a bujías","Distribuye aceite","Distribuye refrigerante","Distribuye combustible","a");
q(123,"Sensor MAP","Mide presión colector","Mide temperatura aceite","Mide voltaje batería","Mide velocidad","a");
q(124,"Sensor MAF","Mide flujo aire","Mide temperatura refrigerante","Mide presión aceite","Mide voltaje alternador","a");
q(125,"Catalizador","Reduce emisiones","Aumenta potencia","Controla aceite","Enciende luces","a");
q(126,"Sistema refrigeración","Mantiene temperatura motor","Mantiene presión aceite","Mantiene voltaje","Mantiene velocidad","a");
q(127,"Termostato","Regula flujo refrigerante","Regula corriente","Regula velocidad","Regula aceite","a");
q(128,"Ventilador radiador","Enfría motor","Calienta motor","Aumenta presión aceite","Disminuye corriente","a");
q(129,"Aceite motor","Lubrica, reduce fricción","Enfría ruedas","Alimenta bujías","Carga batería","a");
q(130,"Filtro aceite","Retiene partículas","Retira agua","Retira aire","Aumenta aceite","a");
q(131,"Filtro aire","Retiene polvo","Lubrica motor","Enfría motor","Aumenta presión","a");
q(132,"Filtro combustible","Retiene impurezas","Lubrica motor","Enfría motor","Aumenta presión","a");
q(133,"Bomba combustible","Suministra presión gasolina","Suministra aceite","Suministra refrigerante","Suministra corriente","a");
q(134,"Correa tiempo","Sincroniza motor","Sincroniza frenos","Sincroniza dirección","Sincroniza luces","a");
q(135,"Polea cigüeñal","Transmite giro a accesorios","Transmite aceite","Transmite refrigerante","Transmite corriente","a");
q(136,"Sensor cigüeñal","Posición y velocidad motor","Presión aceite","Temperatura agua","Voltaje batería","a");
q(137,"Sensor árbol levas","Sincroniza inyección y encendido","Controla frenos","Controla luces","Controla aceite","a");
q(138,"Motor diesel","Compresión enciende combustible","Bujía enciende combustible","Corriente enciende combustible","Aceite enciende combustible","a");
q(139,"Motor gasolina","Bujía enciende mezcla","Compresión enciende mezcla","Corriente enciende mezcla","Aceite enciende mezcla","a");
q(140,"Sensor knock","Detecta detonación","Detecta temperatura","Detecta aceite","Detecta corriente","a");
q(141,"Sensor temperatura refrigerante","Indica temperatura motor","Indica nivel aceite","Indica voltaje","Indica RPM","a");
q(142,"Sensor presión turbo","Indica presión admisión","Indica temperatura aceite","Indica voltaje","Indica RPM","a");
q(143,"Unidad control motor ECU","Procesa señales sensores y controla actuadores","Solo mide voltaje","Solo regula aceite","Solo regula frenos","a");
q(144,"Sistema inyección electrónica multipunto","Cada cilindro tiene inyector","Todos cilindros un inyector","Solo 2 cilindros inyectores","No usa inyectores","a");
q(145,"Sistema inyección directa","Combustible inyectado directamente en cilindro","Combustible inyectado en colector","Combustible en filtro","Combustible en tanque","a");
q(146,"Sensor oxígeno calentado","Se calienta para funcionar rápido","Se enfría para durar","Indiferente","Solo metal conductor","a");
q(147,"Sensor presión aceite mecánico","Aguja indica presión","LED indica presión","LCD indica presión","No indica presión","a");
q(148,"Sensor nivel aceite","Flotador variable resistencia","Corriente constante","Voltaje constante","Inductor","a");
q(149,"Check engine se enciende","Falla detectada por ECU","Falla mecánica manual","Aceite bajo","Batería baja","a");
q(150,"Indicador temperatura motor","Mide resistencia sensor o voltaje ECU","Mide corriente","Mide torque","Mide RPM","a");
// --- PREGUNTAS 151 a 182 ---
q(151,"El sistema ABS trabaja conjuntamente con el programa electrónico de estabilidad ESP, ¿qué componente no es parte de este programa?","el transmisor de dirección geométrico","el transmisor de aceleración transversal","interruptor de pedal de freno","el transmisor que mide la altura","d");
q(152,"El sistema de comunicación por radiofrecuencia desarrollado por la casa Ericsson se denomina","bluetooth","most-bus","can-bus","lin-bus","a");
q(153,"¿El sistema del ABS trabaja conjuntamente con el programa electrónico de estabilidad con qué otro nombre se le conoce a este programa ESP?","esc (electronic stability control)","dsc (dynamic stability control)","esc (electronic stability control), psm (porsche stability management)","todas las anteriores","d");
q(154,"¿Qué función cumple la válvula de final de carrera en algunos circuitos automáticos?","secuencia","final de carrera con rodillo abatible","limitadora de presión","reguladora de presión","a");
q(155,"¿Cuáles son los componentes incluidos en el bloque hidráulico adicional del sistema de frenos, situado entre el cilindro maestro y las pinzas?","bomba de barrido, válvulas de aspiración y presión, acumulador de baja presión, electroválvulas de entrada y salida","bomba de barrido, válvulas de aspiración y presión, cilindro maestro, electroválvulas de entrada y salida, freno de rueda","freno, acumulador de baja presión, electroválvulas de entrada y salida","","a");
q(156,"¿Qué borne recibe corriente desde la llave de contacto en un sistema eléctrico de vehículo?","el borne 86","el borne 85","el borne 30","el borne 87","a");
q(157,"En el sistema de ABS, ¿quién mide las revoluciones por minuto de giro de las ruedas?","la centralita o módulo de control","el sensor de régimen","la línea de datos del bus CAN","","b");
q(158,"En un conductor optoeléctrico, ¿a partir de qué radio de curvatura se produce reflexión total?","superior a 10 mm","superior a 100 mm","superior a 25 mm","inferior a 25 mm","c");
q(159,"En un mensaje CAN, ¿cuántos bits tiene el campo de confirmación?","11 bits","2 bits","16 bits","56 bits","b");
q(160,"En un montaje Darlington, ¿cuál es la mínima tensión entre emisor y base del par Darlington para que el tramo emisor-colector se vuelva conductor?","5v","0,7V","1,4V","Varia según el tipo de transistor","c");
q(161,"¿Es posible codificar una unidad de control a través de internet?","si, mediante un codificado online","no, esta operación es imposible de realizar","Depende de su caracterización","fluctúa en base a sus dimensiones de medida","a");
q(162,"Indica bajo qué principio trabaja el sensor de picado","magnetismo","fotoelectricidad","piezoelectricidad","piezorresitivo","c");
q(163,"La UEC analógica calcula el tiempo básico de inyección a partir de","las revoluciones y temperatura del motor","el aire aspirado y la temperatura del motor","el aire aspirado y las revoluciones del motor","densidad del aire","c");
q(164,"La unidad de control del ABS para el control de tracción está comunicada a través de la red de datos y provoca una reducción de par motor. ¿Sobre qué actuaciones específicas actúa esta reducción del par?","el encendido (retardo el punto del encendido), la alimentación del combustible, la mariposa de gases (aceleración electrónica)","el encendido (desactiva dos inyectores), la alimentación del combustible, la mariposa de gases (aceleración electrónica)","la alimentación del combustible, la mariposa de gases (aceleración electrónica), la transmisión del vehículo","","a");
q(165,"Los circuitos eléctricos de los vehículos son unifilares. ¿Qué parte del vehículo actúa como cable del negativo masa?","las partes de cristal","los plásticos de la carrocería","los vehículos no tienen masa","la carrocería y sus piezas metálicas","d");
q(166,"Los compresores accionados por motor térmico están previstos de un sistema que evita superar la presión de trabajo, ¿de cuál se trata?","válvula de seguridad","válvula de timbrado","valvula de purga","válvula presostática","d");
q(167,"Los elementos de gobierno son...","válvulas que actúan directamente sobre el elemento neumático","válvulas distribuidoras accionadas manualmente","válvulas de mando accionadas automáticamente","válvulas distribuidoras pilotadas","a");
q(168,"Los esquemas eléctricos de los vehículos se representan en versión...","bipolar (cable para el positivo y cable para el negativo)","monopolar (cable para el positivo y negativo a masa)","bipolar y monopolar","bipolar en motores de gasolina y monopolar en motores a diésel","b");
q(169,"Para calcular la sección de un cable necesitamos conocer...","la intensidad, la longitud, el material del cable y la caída de tensión admisible en el circuito","la longitud del cable y la tensión del circuito","la longitud del cable y la intensidad que circula","el material del cable y la tensión del circuito","a");
q(170,"¿Para medir amperaje con un multímetro qué es lo que se debe hacer?","en el multímetro se selecciona amperios; conectado en paralelo","en el multímetro se selecciona amperios; conectado en serie","en el multímetro se selecciona amperios; conectado en serie y escala alta","","c");
q(171,"¿Para medir caída de tensión con un multímetro qué es lo que se debe hacer?","los bornes en las clavijas, luego con las puntas colocar en los puntos de lectura donde se quiere medir. vehículo en contacto o encendido","colocar el borne en cualquier punto del chasis y otro en el punto de medición","punta del multímetro en chasis y otro punto de medición, vehículo apagado","", "a");
q(172,"¿Para medir intensidad con un multímetro qué es lo que se debe hacer?","Se abre el circuito y configura (borne rojo en clavija A, negro en COM)","Se abre el circuito y conectar en paralelo adecuadamente","Se abre el circuito y configura adecuadamente, circuito apagado","", "a");
q(173,"¿Para medir resistencia con un multímetro qué es lo que se debe hacer?","Colocar ruleta en ohmios y escala apropiada, circuito sin voltaje","Colocar ruleta en ohmios con voltaje presente","Escala más grande e ir reduciendo, corriente pequeña circulando","", "a");
q(174,"¿Para medir voltaje absoluto con un multímetro qué es lo que se debe hacer?","Colocar bornes en clavijas y medir puntos","Colocar borne en chasis y otro en punto de medición, vehículo puede estar encendido","Colocar punta en chasis y otra en punto, vehículo apagado","", "b");
q(175,"¿Qué componentes conforman el sistema electrónico del ABS en el vehículo?","Módulo ABS, sensor ruedas, batería, testigo ABS, cuerpo válvulas, conector diagnóstico","Módulo ABS, sensor ruedas, motor bomba, pastillas, cuerpo válvulas, conector diagnóstico","Módulo ABS, sensor de régimen, pastillas, zapatas, testigo ABS, cuerpo válvulas, interruptor encendido","Todas las anteriores","a");
q(176,"¿Qué distancia es la recomendada para la separación de un sensor captador y su entrehierro?","0.5 a 2 mm","1 a 3 mm","0.4 a 0.9 mm","","c");
q(177,"¿Qué tipo de ondas se puede ver en las gráficas del osciloscopio?","Ondas senoidales, cuadradas y rectangulares","Ondas triangulares y en diente de sierra, ondas rectangulares","Pulsos y flancos no escalones","Todas las anteriores","d");
q(178,"¿Qué válvula se emplea en los mecanismos de seguridad?","Simultaneidad","Selectora","Estrangulación","Limitadora","a");
q(179,"¿Según la impedancia de la bobina del inyector, cuál es el valor de resistencia de los inyectores de alta y baja?","Impedancia baja 2,5-4,5 ohm, alta 10-","Impedancia baja 1,7-3 ohm, alta 14-16 ohm","Impedancia baja 1,7-3 ohm, alta 10-16 ohm","", "c");
q(180,"Si al medir la compresión en un vehículo de cuatro cilindros, tres cilindros dan 130 PSI y uno 80 PSI, ¿cuál es el problema?","falla en altas revoluciones","falla en bajas revoluciones","torcedura en las válvulas","no genera correcta relación de compresión","d");
q(181,"¿Qué función se debe activar en la unidad de control de un vehículo para modificar parámetros mediante valores de corrección?","Función de osciloscopio","Función de multímetro","Función de adaptación","Función de lectura de bloques","c");
q(182,"¿Cuántos bits componen un byte?","1024 bits","8 bits","24 bits","16 bits","b");
// --- PREGUNTAS 183 a 213 ---
q(183,"Un circuito neumático o hidráulico está formado por...","Un circuito de mando y un circuito de trabajo","Un circuito de mando","Por elementos indistintamente","Un circuito de trabajo","a");
q(184,"Un conductor optoeléctrico, ¿entre qué rangos de temperatura debe garantizar un correcto funcionamiento?","Entre -40°C y 85°C","Entre 0°C y 85°C","Entre -4°C y 70°C","Entre 10°C y -85°C","a");
q(185,"¿De qué material están hechos los filamentos de las lámparas convencionales?","Cobre","Tungsteno","Kriptón","Fósforo","b");
q(186,"¿A qué distancia del suelo deben estar los centros de los faros de las luces de carretera y cruce?","0.5 a 1.2 metros","0.5 a 1.5 metros","1.2 a 1.5 metros","0.25 a 0.5 metros","a");
q(187,"¿A través de qué cable se excita la unidad de control para el diagnóstico?","Cable H","Cable J","Cable X","Cable K","d");
q(188,"¿Cómo se encuentra la electroválvula del regulador de rigidez cuando está en posición firme?","Activada","Reposo","Elástica","Rígida","b");
q(189,"¿Con qué función del equipo de diagnosis se pueden ajustar los ciclos de regulación de una unidad de control?","Diagnóstico de actuadores","Codificado de la unidad de control","Ajuste básico","Borrado de memoria de averías","c");
q(190,"¿Cuál es la frecuencia de trabajo aproximada de las bobinas electromagnéticas?","Entre 300 y 500 Hz","Entre 100 y 200 Hz","Entre 700 y 1000 Hz","Entre 500 y 700 Hz","a");
q(191,"¿Dónde se emplean los motores paso a paso en un automóvil?","En mecanismos donde se requieren movimientos muy precisos","En mecanismos de dirección","En mecanismos que necesitan mucho par de giro","En mecanismos que giran muy despacio","a");
q(192,"¿Los casquillos de las lámparas de halógenos están fabricados generalmente con?","Fundición","Cobre","Plomo","Latón","d");
q(193,"¿Para qué se realiza la adaptación del cuadro de instrumentos?","Para ajustar configuración del cuadro e intervalos de servicio","Para que la gestión electrónica reconozca el cuadro sustituido","Para identificar averías del cuadro","Ninguna de las anteriores","b");
q(194,"¿Qué duración aproximada en horas de funcionamiento tienen las lámparas de xenón?","250h","500h","2.500h","1.000h","c");
q(195,"¿Qué elementos neumáticos se utilizan para controlar la dirección que debe tomar el fluido en cada fase?","Reguladores","Limitadores de presión","Distribuidores","Ninguna de las anteriores","c");
q(196,"¿Qué misión realiza la red CAN BUS de datos en los circuitos eléctricos?","Permite a los módulos electrónicos compartir señales de sus captadores","Estabiliza la tensión de los módulos electrónicos","Permite leer memoria de averías","Localiza lámparas fundidas de un circuito","a");
q(197,"¿Qué misión realiza la red CAN en los circuitos que disponen de ella?","Alimentar tensión a módulos de gestión","Conectar módulos a masa","Conectar módulos de gestión y transmitir información entre ellos","Conectar captadores y módulos de gestión","c");
q(198,"¿Qué misión tienen las luces de gálibo?","Alumbrar la calzada","Alumbrar calzada marcha atrás","Señalar la anchura del vehículo","Señalar la anchura y altura del vehículo","d");
q(199,"¿Qué números se utilizan para señalar en los esquemas la presión y el escape?","4; 4, 8","2, 3, 5","1; 3, 5","1, 2, 3","c");
q(200,"¿Qué ocurre si en CAN-High se deriva a masa?","Deja de haber comunicación en CAN-Bus","La información pasa por CAN-Low y no se amplifica la señal","Que CAN-Low también se deriva a masa","Las señales se vuelven analógicas","b");
q(201,"¿Qué significa en la representación de un circuito la numeración 1.2?","Elemento de mando de la fase de salida del vástago","Elemento de mando de la fase de entrada del vástago","Elemento de trabajo","Elemento de tratamiento de señal","a");
q(202,"¿Qué sistema de seguridad emplean los vehículos híbridos y eléctricos?","Un desconectador extraíble de alta tensión","Un regulador de alta tensión","No emplean ningún sistema","Una toma de tierra especial","a");
q(203,"¿Qué temperatura puede alcanzar una bombilla incandescente de luz blanca cálida?","600K","150K","2700K","8000K","c");
q(204,"¿Qué tipo de compresor aspira aire por la válvula de aspiración y lo envía al circuito de alta presión a través de la válvula de escape?","De tornillo","De roots","De paletas","De pistón","a");
q(205,"¿Qué válvula accionada por efecto de carga y descarga regula la cantidad de aire que entra y sale del fuelle?","Válvula de alivio","Válvula limitadora de presión","Válvula de nivel","Válvula limitadora de altura","c");
q(206,"Afirmación: La unidad electrónica ROM recibe información de sensores, mientras que RAM almacena mapas de control.","Verdadero","Falso","","","b");
q(207,"Afirmación: La función de programación y adaptación en los escáneres es importante tras reparaciones electrónicas o reemplazo de la UCE.","Verdadero","Falso","","","a");
q(208,"Afirmación: El escáner tiene opción de prueba de actuadores (bloquear puertas, bomba de combustible, TPMS, etc.), según opciones del vehículo.","Verdadero","Falso","","","a");
q(209,"Afirmación: Los escáneres detectan todas las unidades de control y leen códigos de error de fallas existentes.","Verdadero","Falso","","","a");
q(210,"Afirmación: En determinados sensores, se utilizan etapas intermedias no eléctricas. En ABS se usan sensores pasivos (inductivos) y activos (magnetorresistivos).","Verdadero","Falso","","","a");
q(211,"Afirmación: En determinados sensores, se utilizan etapas intermedias no eléctricas, en ABS se emplean sensores pasivos (inductivos) y activos (magnetorresistivos).","Verdadero","Falso","","","a");
q(212,"Afirmación: La rueda mueve el anillo ferromagnético, generando líneas de fuerza del imán permanente, induciendo en el bobinado del sensor una tensión alterna cuadrada.","Verdadero","Falso","","","b");
q(213,"Afirmación: Algunos scanners solo leen códigos con problemas; para entenderlos se necesita el manual correspondiente.","Verdadero","Falso","","","a");


// Renderizamos las preguntas
let quizDiv = document.getElementById("quiz");
preguntas.forEach((p)=>{
  let qDiv = document.createElement("div");
  qDiv.classList.add("question");
  qDiv.innerHTML = `<b>${p.num}. ${p.preg}</b>
  <div class="options">
    <label><input type="radio" name="q${p.num}" value="a"> ${p.op1}</label>
    <label><input type="radio" name="q${p.num}" value="b"> ${p.op2}</label>
    <label><input type="radio" name="q${p.num}" value="c"> ${p.op3}</label>
    <label><input type="radio" name="q${p.num}" value="d"> ${p.op4}</label>
  </div>`;
  quizDiv.appendChild(qDiv);
});

// Función para calcular resultado
function calcularResultado(){
  let score = 0;
  preguntas.forEach((p)=>{
    let radios = document.getElementsByName("q"+p.num);
    radios.forEach(r => {
      if(r.checked && r.value === p.correcta){
        score++;
      }
    });
  });
  document.getElementById("resultado").innerText = 
    `Tu puntuación es ${score} de ${preguntas.length}`;
}

// Función para agregar preguntas al arreglo
function q(num, preg, op1, op2, op3, op4, correcta){
  preguntas.push({num, preg, op1, op2, op3, op4, correcta});
}
