var ctlZoomSlider;


// Création de l'icone des dossiers techniques de janvier 2024

var icone = L.icon({
    iconUrl: "dt.png",
    iconSize: [40, 40],
    iconAnchor: [25, 50],
    popupAnchor: [0, -40]
});


// Création de l'icone des dossiers techniques de février 2024

var iconef = L.icon({
    iconUrl: "dt1.png",
    iconSize: [40, 40],
    iconAnchor: [25, 50],
    popupAnchor: [0, -40]
});


// Création de l'icone des dossiers techniques de mars

var iconem = L.icon({
    iconUrl: "dt2.png",
    iconSize: [40, 40],
    iconAnchor: [25, 50],
    popupAnchor: [0, -40]
})


// Création des variables coordonées pour les dossiers techniques de janvier 2024.

var a = [6.8775670591309944, -5.2942172651390728]
var b = [6.882, -5.277]
var c = [6.735243935592279, -5.3072777402186055]
var d = [6.73273060926387, -5.308993538107407]
var e = [6.829925121599606, -5.266605638070934]
var f = [6.821046105400806, -5.284691453383187]
var g = [6.860463386911161, -5.229648087500162]
var h = [6.835946596721975, -5.262257346022172]
var i = [6.843099811023413, -5.229061507713399]
var j = [6.856731622996179, -5.241646321463439]
var k = [6.742640427999541, -5.355578740495332]
var l = [6.739143649942288, -5.305256453445976]
var m = [6.736970177690216, -5.305171453447497]
var n = [6.820552817606112, -5.274172722505729]
var o = [6.874538164264899, -5.294333604620259]
var p = [6.762113952276985, -5.295968057764928]
var q = [6.888487518733712, -5.276935791958397]
var r = [6.850096486829381, -5.2568094624515975]
var s = [6.801321508196295, -5.245942100102715]
var t = [6.830948321201511, -5.265951557302741]
var u = [6.830050964785528, -5.2661752838231255]
var v = [6.761807419727096, -5.295958110079819]
var w = [6.8731096348181895, -5.2959547329063]
var x = [6.8747096348181895, -5.2987547329063]
var y = [6.758329230736667, -5.221949622745297]
var z = [6.735416037773187, -5.303510114820878]
var aa = [6.89441239887945, -5.191122988186833]
var ab = [6.7332129446663975, -5.357559284136365]
var ac = [6.8198381777537245, -5.284850294990413]
var ad = [6.738239831946793, -5.204443949380498]
var ae = [6.861424339537672, -5.289304560900593]
var af = [6.890958202409534, -5.282804114701298]
var ag = [6.822526305813242, -5.293556948720878]
var ah = [6.71187925433564, -5.271810799363645]
var ai = [6.709442268796141, -5.265290296263492]
var aj = [6.8628898710525235, -5.290340435053326]
var ak = [6.73742546765274, -5.302943500663323]
var al = [6.73743546765274, -5.30263500663323]
var am = [6.873753682882149, -5.29661151810386]
var an = [6.736986821476173, -5.2050128011769194]
var ao = [6.7364785865085635, -5.304291903432405]
var ap = [6.832661176618131, -5.264632468936126]
var aq = [6.833537962704221, -5.264033613174997]
var ar = [6.756753546527774, -5.254614477626638]
var as = [6.892823697504671, -5.201584147637717]
var at = [6.758926832677933, -5.25653265019619]
var au = [6.736310690167455, -5.304486831825325]
var av = [6.76394017420905, -5.217076937597564]
var aw = [6.881854639780847, -5.279181496373329]
var ax = [6.879433173779721, -5.280451369490125]
var ay = [6.756647003318538, -5.25459301995507]
var az = [6.846272538344602, -5.291607824000169]
var ba = [6.889926821965953, -5.286300519832571]
var bb = [6.885726821965953, -5.2863200519832571]
var bc = [6.887326821965953, -5.2884200519832571]
var bd = [6.83404299263787, -5.334798307746965]
var be = [6.8246584213303985, -5.290750043463842]
var bf = [6.733479855855528, -5.358020352774221]
var bg = [6.7765160441360495, -5.240898857864658]
var bh = [6.760752374644084, -5.224678085647746]
var bi = [6.737299489317302, -5.206255739359895]
var bj = [6.737899489317302, -5.206955739359895]
var bk = [6.761804983275205, -5.226659817682986]
var bl = [6.758091623115733, -5.296787284358421]
var bm = [6.845720681504592, -5.305636721884623]
var bn = [6.735175657293691, -5.302678462267787]
var bo = [6.783412909641785, -5.255355359892513]
var bp = [6.783231796176358, -5.255333902220997]
var bq = [6.846208624333113, -5.29154345098562]
var br = [6.845782530704461, -5.292873826619601]
var bs = [6.7305053291110895, -5.300709208202257]
var bt = [6.732018355981691, -5.301645378739919]
var bu = [6.7806119586414795, -5.236024066617037]
var bv = [6.783189181233426, -5.255333902220997]
var bw = [6.778522706806748, -5.261889281227821]
var bx = [6.833814298829193, -5.321747996338337]
var by = [6.879902852768551, -5.402484070433915]
var bz = [6.733507003821832, -5.357886170454189]
var ca = [6.883631003723627, -5.276935080485827]
var cb = [6.861509341262913, -5.283061267153447]




// Création des variables coordonées pour les dossiers techniques de février 2024.


var cc = [6.784084094243361, -5.255301715713755]
var cd = [6.845377741404913, -5.292530503875373]
var ce = [6.847079608590292, -5.291535876754653]
var cf = [6.76169844117929, -5.226166291238153]
var cg = [6.732844922047917, -5.1905098496374205]
var ch = [6.845507387198184, -5.309388699321697]
var ci = [6.758171216083075, -5.296962801680648]
var cj = [6.738286502571446, -5.304827805153433]
var ck = [6.763115722330533, -5.2266492132963736]
var cl = [6.733335041945086, -5.30944026809254]
var cm = [6.734917299985049, -5.309304512156418]
var cn = [6.758735893044487, -5.297381226275178]
var co = [6.733208668461529, -5.357113694279593]
var cp = [6.757308217943417, -5.298046414092224]
var cq = [6.874118638187091, -5.198230077765123]
var cr = [6.736869274611826, -5.307843781805532]
var cs = [6.845229198870209, -5.28879548270481]
var ct = [6.78410540167572, -5.255205156191924]
var cu = [6.775067607132619, -5.256737063593222]
var cv = [6.755464870828445, -5.2575072312741336]
var cw = [6.732023790889371, -5.189838147448888]
var cx = [6.835974074047782, -5.259577657051239]
var cy = [6.837641175104451, -5.258580726874977]
var cz = [6.884376608023437, -5.275883654581525]
var da = [6.735296144382629, -5.205372942767546]
var db = [6.879280466015249, -5.183831207932263]
var dc = [6.736683588084295, -5.207248606580314]
var dd = [6.705616780846514, -5.26725235542343]
var de = [6.7348190201509235, -5.311524948082662]
var df = [6.843012772232489, -5.2877740591724045]
var dg = [6.782221850944137, -5.268707596963386]
var dh = [6.888125914743309, -5.278694609550168]
var di = [6.733143051096933, -5.301543034925901]
var dj = [6.843604510764267, -5.305158498902549]
var dk = [6.843321436942181, -5.308750822885263]
var dl = [6.76378238896052, -5.214357444896043]
var dm = [6.728937533692772, -5.311482032739623]
var dn = [6.87253205970497, -5.196311015174384]
var dp = [6.737533158319975, -5.211879213257843]
var dq = [6.784169323967122, -5.255237342699198]
var dr = [6.844041121648984, -5.29183020104572]
var ds = [6.731626232229428, -5.189884478344517]
var dt = [6.91902381739237, -5.537206418725312]
var du = [6.885292634559463, -5.275411585808166]
var dv = [6.89040530842769, -5.285646895152807]
var dw = [6.783061336381992, -5.255902530516214]
var dx = [6.728831940459089, -5.305127397238586]
var dy = [6.7594891406167505, -5.263206006329267]
var dz = [6.884376608023437, -5.283329466597699]
var ea = [6.861207361330281, -5.2295962779963]
var eb = [6.880733214502334, -5.1909257652265515]
var ec = [6.8809553104439445, -5.190114477625602]
var ed = [6.736905851956178, -5.303945823744307]
var ee = [6.8730637096255185, -5.197823522866499]
var ef = [6.775994355395826, -5.274298164711111]
var eg = [6.737844974541826, -5.309078773529792]
var eh = [6.880251380984248, -5.40108560968457]
var ei = [6.758534127279505, -5.297456619472236]
var ej = [6.842800455108289, -5.289224636135092]
var ek = [6.783486221107738, -5.268458116184585]
var el = [6.861086487191119, -5.229285944247895]
var em = [6.845895067799155, -5.309741415843453]
var en = [6.735315890810594, -5.205349320903394]
var eo = [6.889851437991539, -5.278222540776808]
var ep = [6.777784206601595, -5.27558562511305]
var eq = [6.734991169055798, -5.206397068836593]
var er = [6.733295933631537, -5.302609051282657]
var es = [6.732116457605864, -5.311733673455289]
var et = [6.902480412773303, -5.256950958394666]



// Création des variables coordonées pour les dossiers techniques de mars 2024.


var eu = [6.6771542323888795, -5.241646451490858]
var ev = [6.886766855680111, -5.159224505006673]
var ew = [6.885526966645105, -5.284380892502]
var ex = [6.879353403906951, -5.1771631183943425]
var ey = [6.67964429356527, -5.2436221673473]
var ez = [6.774738201819037, -5.244112040845693]
var fa = [6.67785995426336, -5.241062552708663]
var fb = [6.6790152440376405, -5.2416665128815865]
var fc = [6.888237968040523, -5.198688712324271]
var fd = [6.73365901101205, -5.311616152578077]
var fe = [6.887327110812568, -5.23664304998662]
var fg = [6.921256693811675, -5.536387391574127]
var fh = [6.728085138439621, -5.306632598976928]
var fi = [6.889994793209123, -5.199973754598638]
var fj = [6.888553082232995, -5.276658589925357]
var fk =[6.777632073939156, -5.273860178350212]
var fl=[6.679294922546524, -5.241792878827742]
var fm=[6.8489362049936044, -5.28853799064657]
var fn=[6.73381126885924, -5.314935827836236]
var fo=[6.890026688338384, -5.200093856034921]
var fp=[6.8794769011852654, -5.282127836992784]
var fq=[6.873242162661085, -5.286904058628421]
var fr=[6.783058827115385, -5.255267507643051]
var fs=[6.784133871704728, -5.255423822285056]
var ft=[6.848643806508921, -5.292499119061372]
var fu=[6.845615744997845, -5.2925905978724845]
var fv=[6.842723119956997, -5.312332987017165]
var fw=[6.762765620773479, -5.214413142424655]
var fx=[6.881117243453312, -5.275905112253041]
var fy=[6.7361693943859615, -5.2986843211135755]
var fz=[6.891277596899292, -5.272469115686043]
var ga=[6.835415504620236, -5.323710112781835]
var gb=[6.825540207099317, -5.272714062723878]
var gc=[6.764373307285679, -5.2463037260107575]
var gd=[6.776276550238702, -5.276781071583672]
var ge=[6.758256450383653, -5.298035685256478]
var gf=[6.754983259587862, -5.256042064634022]
var gg=[6.705681329460834, -5.270886057001953]
var gh=[6.8435674281574945, -5.2858343240355286]
var gi=[6.830684898964891, -5.2608327774403065]
var gj=[6.732024990712698, -5.3566557520276765]
var gk=[6.8490873925442965, -5.290654794306216]
var gl=[6.847804061457438, -5.2934287662065085]
var gm=[6.884291396162753, -5.279488543396238]
var gn=[6.757169711925705, -5.297982041077686]
var go=[6.732815913200567, -5.300667366295383]
var gp=[6.732640655753858, -5.308929326454337]
var gq=[6.732834538557713, -5.2068035980753]
var gr=[6.734341920829182, -5.210483240159057]



// Création des variables popup pour le mois de janvier

var privat = L.marker(a, { icon: icone }).bindPopup("YEBOUE Kouadio Privat  ilot:83  lot:953");
mariame = L.marker(b, { icon: icone }).bindPopup("Sylla Mariame  ilot:33  lot:360");
edouard = L.marker(c, { icon: icone }).bindPopup("Konana Kouassi Edouard  ilot:2  lot:19")
abou = L.marker(d, { icon: icone }).bindPopup("Gangue Abou  ilot:38  lot:386")
loukou = L.marker(e, { icon: icone }).bindPopup("Kakou Loukou  ilot:20  lot:172")
severine = L.marker(f, { icon: icone }).bindPopup("KOULAI MARINA SEVERINE  ilot:50  lot:238")
clarisse = L.marker(g, { icon: icone }).bindPopup("AMANI AMOIN CLARISSE  ilot:37  lot:272")
konan = L.marker(h, { icon: icone }).bindPopup("KOUAKOU KONAN  ilot:83  lot:591")
amlan = L.marker(i, { icon: icone }).bindPopup("DIBY EDWIGE AMLAN EPSE BROU  ilot:239  lot:2434")
tahiru = L.marker(j, { icon: icone }).bindPopup("BABALOLA TAHIRU  ilot:14  lot:113")
lamine = L.marker(k, { icon: icone }).bindPopup("FOFANA LAMINE  ilot:55  lot:473")
kodjo = L.marker(l, { icon: icone }).bindPopup("ADJANADO KODJO  ilot:72  lot:693")
urbain = L.marker(m, { icon: icone }).bindPopup("KONE KINAYA URBAIN  ilot:26  lot:252")
emmanuelle = L.marker(n, { icon: icone }).bindPopup("EHUENY SERGE BILE ET BOTO-AKRE DOGBO HELEINE EMMANUELLE  ilot:68  lot:611")
pacome = L.marker(o, { icon: icone }).bindPopup("N'CHO AKISSI THIERRY PACOME  ilot:116  lot:1388")
nourane = L.marker(p, { icon: icone }).bindPopup("DOUMBIA FANTA ALYAH NOURANE  ilot:563  lot:4944")
dia = L.marker(q, { icon: icone }).bindPopup("BA ABIBOU DIA  ilot:8  lot:73")
flore = L.marker(r, { icon: icone }).bindPopup("KOUADIO CARINE FLORE ilot:13E  lot:754")
olivier = L.marker(s, { icon: icone }).bindPopup("KRA KOFFI OLIVIER ilot:60  lot:467")
hippolyte = L.marker(t, { icon: icone }).bindPopup("KOFFI KOFFI KAN HIPPOLYTE ilot:79  lot:551")
lucien = L.marker(u, { icon: icone }).bindPopup("EHOUMAN BOUADOU LUCIEN ilot:81  lot:573")
ange = L.marker(v, { icon: icone }).bindPopup("KAKOUBI ANGE-CONSTANCE SYLVIA EPSE ADINGRA ilot:331  lot:2655")
clarissd = L.marker(w, { icon: icone }).bindPopup("DIBI CLARISSE ilot:129  lot:1575")
fanta = L.marker(x, { icon: icone }).bindPopup("TRAORE FANTA ilot:27  lot:3")
issouf = L.marker(y, { icon: icone }).bindPopup("SOUMAHORO ISSOUF   ilot:221  lot:31")
soro = L.marker(z, { icon: icone }).bindPopup("KONE MARIAM EPSE SORO   ilot:66  lot:582")
urbains = L.marker(aa, { icon: icone }).bindPopup("SIALLOU KOUAKOU URBAIN   ilot:38  lot:388")
ouattara = L.marker(ab, { icon: icone }).bindPopup("ABDOULAYE OUATTARA   ilot:68  lot:582")
clovis = L.marker(ac, { icon: icone }).bindPopup("GAYE DANO TOUSSAINT CLOVIS   ilot:41  lot:164")
simone = L.marker(ad, { icon: icone }).bindPopup("BLA AYA SIMONE  ilot:33  lot:347")
clementine = L.marker(ae, { icon: icone }).bindPopup("N'GUESSAN ADJOUA CLEMENTINE  ilot:122  lot:1458")
konann = L.marker(af, { icon: icone }).bindPopup("N'GUESSAN KONAN  ilot:99  lot:1161")
diarra = L.marker(ag, { icon: icone }).bindPopup("COULIBALY SAMBA DIARRA  ilot:7  lot:83")
guillaume = L.marker(ah, { icon: icone }).bindPopup("SEKA KOFFI GUILLAUME  ilot:79  lot:450")
karamoko = L.marker(ai, { icon: icone }).bindPopup("COULIBALY KARAMOKO  ilot:628  lot:3552")
fatoumata = L.marker(aj, { icon: icone }).bindPopup("OUATTARA FATOUMATA  ilot:29  lot:5")
sylvie = L.marker(ak, { icon: icone }).bindPopup("ALLAPO ANIN EMMA SYLVIE  ilot:94  lot:13")
noelle = L.marker(al, { icon: icone }).bindPopup("EBY DIGBEU RITA-NOELLE ilot:13 lot:88")
yaya = L.marker(am, { icon: icone }).bindPopup(" BANAO YAYA ilot:144 lot:1787")
solange = L.marker(an, { icon: icone }).bindPopup(" KONE N'GUESSAN AIMEE SOLANGE ilot:136 lot:936")
samaila = L.marker(ao, { icon: icone }).bindPopup(" SAIDOU SAMAILAi  ilot:25 lot:239")
fatoumatad = L.marker(ap, { icon: icone }).bindPopup(" DOSSO FATOUMATA  lot:108 lot:778")
lamined = L.marker(aq, { icon: icone }).bindPopup(" DOSSO MOUHAMADOU LAMINE  ilot:108 lot:776")
oumar = L.marker(ar, { icon: icone }).bindPopup(" SACKO OUMAR  ilot:124 lot:1120")
seindou = L.marker(as, { icon: icone }).bindPopup(" FOFANA SEINDOU  ilot:31 lot:283")
emilie = L.marker(at, { icon: icone }).bindPopup(" KOUADIO ADJOUA EMILIE  ilot:4 lot:23")
saindou = L.marker(au, { icon: icone }).bindPopup(" KAMAGATE SAINDOU  ilot:10 lot:98")
joelle = L.marker(av, { icon: icone }).bindPopup(" KOFFI ANNICK JOELLE  ilot:45 lot:375")
koffi = L.marker(aw, { icon: icone }).bindPopup(" Mme KOUAKOU AMENAN ODETTE EPSE KOFFI  ilot:14 lot:151")
dimitri = L.marker(ax, { icon: icone }).bindPopup(" M.KOUASSI KONAN DIMITRI  ilot:70 lot:545")
mabogoba = L.marker(ay, { icon: icone }).bindPopup(" M.COULIBALY MABOGOBA  ilot:133B lot:1201B")
doudou = L.marker(az, { icon: icone }).bindPopup(" SY SAVANE AHMADOU DOUDOU  ilot:28 lot:265")
moussa = L.marker(ba, { icon: icone }).bindPopup(" SANOGO ZIE MOUSSA  ilot:81D lot:25-27")
siaka = L.marker(bb, { icon: icone }).bindPopup(" BAMBA SIAKA  ilot:81D lot:26")
ahmad = L.marker(bc, { icon: icone }).bindPopup(" KARAMOKO SOIFFIAT AHMAD  ilot:81D lot:28")
christine = L.marker(bd, { icon: icone }).bindPopup(" FOFANA AICHA CHRISTINE  ilot:2 lot:17")
arouna = L.marker(be, { icon: icone }).bindPopup(" TRAORE AROUNA  ilot:122 lot:1167")
placide = L.marker(bf, { icon: icone }).bindPopup(" AKROMAN ASSOM PLACIDE  ilot:63 lot:539")
Michel = L.marker(bg, { icon: icone }).bindPopup(" YAVO ANASSE ANGE MICHEL  ilot:240 lot:2067")
fatou = L.marker(bh, { icon: icone }).bindPopup(" KONE FATOU  ilot:8 lot:51")
maimouna = L.marker(bi, { icon: icone }).bindPopup(" SORO MAIMOUNA   ilot:80 lot:813")
adama = L.marker(bj, { icon: icone }).bindPopup(" SORO ADAMA   ilot:22 lot:221")
victor = L.marker(bk, { icon: icone }).bindPopup(" ALLUI KOFFI VICTOR   ilot:83 lot:731")
yayad = L.marker(bl, { icon: icone }).bindPopup(" DIALLO YAYA   ilot:409B lot:3343A")
nicolas = L.marker(bm, { icon: icone }).bindPopup(" KOUASSI KOUASSI NICOLAS   ilot:40 lot:424C")
boubacar = L.marker(bn, { icon: icone }).bindPopup(" THIOYE BOUBACAR  ilot:63 lot:598")
oyewole = L.marker(bo, { icon: icone }).bindPopup(" ADJAGBE PAUL OYEWOLE ilot:38 lot:352")
oyewole = L.marker(bp, { icon: icone }).bindPopup(" ADJAGBE PAUL OYEWOLE ilot:38 lot:350")
carole = L.marker(bq, { icon: icone }).bindPopup(" SINGO ZOKAGON CAROLE ilot:37 lot:318")
simplice = L.marker(br, { icon: icone }).bindPopup(" N'GUESSAN KOUADIO SIMPLICE ilot:21 lot:176")
sibiri = L.marker(bs, { icon: icone }).bindPopup(" M. YOUGBARE SIBIRI ilot:3 lot:19")
kevin = L.marker(bt, { icon: icone }).bindPopup(" BROSSOU YANN HAROLD KEVIN ilot:32 lot:226 & 228 & 230")
bruno = L.marker(bu, { icon: icone }).bindPopup(" KOUAME BRUNO ilot:31 lot:240 & 241")
nguessan = L.marker(bv, { icon: icone }).bindPopup(" ANGAMAN N'GUESSAN ilot:20 lot:143")
djibiri = L.marker(bw, { icon: icone }).bindPopup(" KONE DJIBIRI  ilot:139 lot:991 & 992 & 993 & 994 & 995 & 996 & 997 & 998 & 999 & 1000 & 1001 & 1003")
maurine = L.marker(bw, { icon: icone }).bindPopup(" KONAN FLEUR BEKANTY MAURINE  ilot:45 lot:253")
kouassi = L.marker(bx, { icon: icone }).bindPopup(" DIZAN KOFFI KOUASSI  ilot:59 lot:711")
banque = L.marker(by, { icon: icone }).bindPopup(" BANQUE MALIENNE DE SOLIDARITE BMS-SA 5ha")
marc = L.marker(bz, { icon: icone }).bindPopup(" SEGOUN JEAN-MARC  ilot:55  lot:478")
yannick = L.marker(ca, { icon: icone }).bindPopup(" N'GUESSAN POSSON YANNICK  ilot:89  lot:1240")
yannick = L.marker(cb, { icon: icone }).bindPopup(" GONDO BADIA SEVERIN  ilot:128  lot:1429")





var DT = L.layerGroup([privat, mariame, edouard, abou, loukou, severine, clarisse, konan, amlan, tahiru, lamine, kodjo, urbain, emmanuelle, pacome, nourane, dia, flore, olivier, hippolyte, lucien, ange, clarissd, fanta, issouf, soro, urbains, ouattara, clovis, simone, clementine, konann, diarra, guillaume, karamoko, fatoumata, sylvie, noelle, yaya, solange, samaila, fatoumatad, lamined, oumar, seindou, emilie, saindou, joelle, koffi, dimitri, mabogoba, doudou, moussa, siaka, ahmad, christine, arouna, placide, Michel, fatou, maimouna, adama, victor, yayad, nicolas, boubacar, carole, simplice, kevin, sibiri, bruno, oyewole, nguessan, djibiri, maurine, kouassi, banque, marc, yannick]);



// Chargement des fonds de map

osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

ESRI = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.esri.com/en-us/home">ESRI</a> contributors'
})


// Création et intégration des fonds de carte de base

var map = L.map('map', {
    center: a,
    zoom: 3,
    layers: [osm]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "ESRI": ESRI,
    "openTopoMap": openTopoMap,
    
};

var overlayMaps = {
    "DT Janvier 2024": DT

};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


// Création des variables popup pour le mois de février

var ali = L.marker(cc, { icon: iconef }).bindPopup("M. KONE ALI  ilot:58  lot:506")
sekou = L.marker(cd, { icon: iconef }).bindPopup("M. DOSSO SEKOU  ilot:2  lot:8")
marcel = L.marker(ce, { icon: iconef }).bindPopup("M. PERRETI MARCEL  ilot:84 lot:2")
pascal = L.marker(cf, { icon: iconef }).bindPopup(" KANGA N'ZI JACQUES ET ETTIEN ANOKAN PASCAL ilot:23  lot:182")
auguste = L.marker(cg, { icon: iconef }).bindPopup(" KOUAKOU AUGUSTE  ilot:28")
justine = L.marker(ch, { icon: iconef }).bindPopup(" GNABA AKISSI JUSTINE  ilot:116  lot:1301")
seidou = L.marker(ci, { icon: iconef }).bindPopup(" KONATE SEIDOU  ilot:187  lot:1526")
patenian = L.marker(cj, { icon: iconef }).bindPopup(" COULIBALY PATENIAN  ilot:9  lot:89")
putegnat = L.marker(ck, { icon: iconef }).bindPopup(" KOUASSI KOUADIO PUTEGNAT  ilot:4  lot:25-26")
delmas = L.marker(cl, { icon: iconef }).bindPopup(" OUATTARA ABDOULAYE DELMAS  ilot:92  lot:864")
patenianc = L.marker(cm, { icon: iconef }).bindPopup(" COULIBALY PATENIAN  ilot:9  lot:89")
casimir = L.marker(cn, { icon: iconef }).bindPopup(" SORO SOUNGALO CASIMIR  ilot:403  lot:3297")
didier = L.marker(co, { icon: iconef }).bindPopup(" KABO SERGE DIDIER  ilot:75  lot:642 & 643 & 644 & 645 & 646")
korotoumou = L.marker(cp, { icon: iconef }).bindPopup(" DOSSO KOROTOUMOU  ilot:36  lot:284")
pelagie = L.marker(cq, { icon: iconef }).bindPopup(" SENI BLANDINE PELAGIE EPSE YAPO  ilot:81  lot:526")
maimounak = L.marker(cr, { icon: iconef }).bindPopup(" KONE MAIMOUNA  ilot:94  lot:901")
charles = L.marker(cs, { icon: iconef }).bindPopup(" BLE CHARLES  ilot:67  lot:495")
madjid = L.marker(ct, { icon: iconef }).bindPopup(" OUEDRAOGO ABDOUL-MADJID  ilot:69  lot:641")
yacouba = L.marker(cu, { icon: iconef }).bindPopup(" OUEDRAOGO YACOUBA  ilot:41  lot:598")
josephine = L.marker(cv, { icon: iconef }).bindPopup(" AKA ANDOUA ANEMONE MARIE JOSEPHINE  ilot:34  lot:261")
thomas = L.marker(cw, { icon: iconef }).bindPopup(" YAO YAO THOMAS  ilot:46  lot:424")
serge = L.marker(cx, { icon: iconef }).bindPopup(" POKOU KOFFI SERGE  ilot:89  lot:626")
fabrice = L.marker(cy, { icon: iconef }).bindPopup(" BOUABRE ARNAUD FABRICE  ilot:99  lot:695")
nouho = L.marker(cz, { icon: iconef }).bindPopup(" KONE NOUHO  ilot:15")
yayas = L.marker(da, { icon: iconef }).bindPopup(" SYLLA YAYA  ilot:55  lot:551")
fabricen = L.marker(db, { icon: iconef }).bindPopup(" NOUFE SIE FABRICE  ilot:106  lot:963")
delphine = L.marker(dc, { icon: iconef }).bindPopup(" DOSSO FATOUMATA DELPHINE EPSE BAKAYOKO  ilot:160  lot:1414")
ngou = L.marker(dd, { icon: iconef }).bindPopup(" KESSI ABEL N'GOU  ilot:7 lot:50")
mamoudou = L.marker(de, { icon: iconef }).bindPopup(" NIAONE MAMOUDOU  ilot:64  lot:609")
joel = L.marker(df, { icon: iconef }).bindPopup(" N'GUESSAN KOUADIO JOEL  ilot:56  lot:470")
medard = L.marker(dg, { icon: iconef }).bindPopup(" KOFFI YAO MEDARD  ilot:82  lot:565")
kouame = L.marker(dh, { icon: iconef }).bindPopup(" N'DRI KOUAME  ilot:81D  lot:29")
laminedm = L.marker(di, { icon: iconef }).bindPopup(" DOUMBIA MOHAMED LAMINE ilot:36  lot:362")
sonia = L.marker(dj, { icon: iconef }).bindPopup(" AKPO SIALLOU AYA SONIA ilot:120  lot:1363A")
ghislain = L.marker(dk, { icon: iconef }).bindPopup(" YAO KONAN GHISLAIN ilot:64B  lot:1367B")
hadja = L.marker(dl, { icon: iconef }).bindPopup(" MEITE HADJA  ilot:62  lot:560")
hadjam = L.marker(dm, { icon: iconef }).bindPopup(" MEITE HADJA  ilot:90  lot:804")
junior = L.marker(dn, { icon: iconef }).bindPopup(" BOUAZO GNANAGBE WILFRIED JUNIOR  ilot:5F  lot:63")
etienne = L.marker(dp, { icon: iconef }).bindPopup(" KOUAKOU KOUADJO ETIENNE ilot:124  lot:855")
fatah = L.marker(dq, { icon: iconef }).bindPopup(" OUEDRAOGO ABDOUL FATAH  ilot:60  lot:523")
nakilboe = L.marker(dr, { icon: iconef }).bindPopup(" BAZIE NAKILBOE  ilot:81  lot:722")
gertrude = L.marker(ds, { icon: iconef }).bindPopup(" KOUASSI ALLAO ANGELINE GERTRUDE  ilot:38  lot:357")
yardjouma = L.marker(dt, { icon: iconef }).bindPopup(" KONE YARDJOUMA  ilot:38  lot:429")
stephane = L.marker(du, { icon: iconef }).bindPopup(" GONDO WOHI STEPHANE   ilot:125  lot:1558")
noel = L.marker(dv, { icon: iconef }).bindPopup(" DAKOURY OREGA ARMAND NOEL   ilot:110  lot:1301")
rahama = L.marker(dw, { icon: iconef }).bindPopup(" OUEDRAOGO RAHAMA   ilot:63  lot:556BIS")
hicham = L.marker(dx, { icon: iconef }).bindPopup(" JOMAA HICHAM   ilot:8  lot:F")
etiennek = L.marker(dy, { icon: iconef }).bindPopup(" KOUAKOU KOUADJO ETIENNE   ilot:124  lot:855")
eunoxie = L.marker(ea, { icon: iconef }).bindPopup(" DAYALOR EUNOXIE  ilot:19 & 20 & 21 & 22 & 23 & 24 & 25")
anicet = L.marker(eb, { icon: iconef }).bindPopup(" IRIE BI DJE ANICET   ilot:114  lot:1065")
rita = L.marker(ec, { icon: iconef }).bindPopup(" SORO YIRE SALY RITA EPSE KOUASSI    ilot:239  lot:2435")
amara = L.marker(ed, { icon: iconef }).bindPopup(" KONATE AMARA    ilot:53  lot:487")
blaise = L.marker(ee, { icon: iconef }).bindPopup(" SILUE SIKATOGO BLAISE   ilot:193  lot:1296")
abiba = L.marker(ef, { icon: iconef }).bindPopup(" COULIBALY ABIBA EPSE BERTE   ilot:168  lot:1246")
gregoire = L.marker(eg, { icon: iconef }).bindPopup(" PARE GREGOIRE   ilot:10  lot:67")
kouadio = L.marker(eh, { icon: iconef }).bindPopup(" FENISSIA AMENAN KOUADIO   ilot:14  lot:75")
lazare = L.marker(ei, { icon: iconef }).bindPopup(" N'GUESSAN KOFFI YAO-LAZARE  ilot:530  lot:4544")
esperant = L.marker(ej, { icon: iconef }).bindPopup(" TOURE BLONDE ESPERANT  ilot:102  lot:1133")
traore = L.marker(ek, { icon: iconef }).bindPopup(" MAMOUDOU TRAORE  ilot:195BIS  lot:4669B")
patricia = L.marker(el, { icon: iconef }).bindPopup(" AKMEL NATHALIE PATRICIA EPOUSE BROU  ilot:60  lot:457")
gerard = L.marker(em, { icon: iconef }).bindPopup(" OUARI GERARD  ilot:66  lot:730")
herve = L.marker(en, { icon: iconef }).bindPopup(" DOTIEN TINNON HERVE  ilot:81  lot:930")
helene = L.marker(eo, { icon: iconef }).bindPopup(" N'GUESSAN AKISSI HELENE   ilot:55  lot:955")
joseph = L.marker(ep, { icon: iconef }).bindPopup(" LOKOUI JOSEPH   ilot:186  lot:1450")
hippolytea = L.marker(eq, { icon: iconef }).bindPopup(" AMANY N'DRI HIPPOLYTE   ilot:33  lot:345")
fehena = L.marker(er, { icon: iconef }).bindPopup(" YEO FEHENA   ilot:42  lot:397")
vassuemana = L.marker(es, { icon: iconef }).bindPopup(" BAMBA VASSUEMANA   ilot:92  lot:830")
serge = L.marker(et, { icon: iconef }).bindPopup(" SONON SOTONDE SERGE   ilot:12  lot:123")





var DT1 = L.layerGroup([ali, sekou, marcel, pascal, auguste, justine, seidou, patenian, putegnat, delmas, patenianc, casimir, didier, korotoumou, pelagie, maimounak, charles, madjid, yacouba, josephine, thomas, serge, fabrice, nouho, yayas, fabricen, delphine, ngou, mamoudou, joel, medard, kouame, laminedm, sonia, ghislain, hadjam, junior, etienne, fatah, nakilboe, gertrude, yardjouma, stephane, noel, rahama, hicham, etiennek, eunoxie, anicet, rita, amara, blaise, abiba, gregoire, kouadio, lazare, esperant, traore, patricia, gerard, herve, helene, joseph, hippolytea, fehena, vassuemana]);

layerControl.addOverlay(DT1, "DT Février 2024");



// Création des variables popup pour le mois de mars

var guenidjale = L.marker(eu, { icon: iconem }).bindPopup(" SORO SIRAMANI GUENIDJALE    ilot:128  lot:1212")
koffia = L.marker(ev, { icon: iconem }).bindPopup(" ATTI KOFFI    ilot:29  lot:320")
romoe = L.marker(ew, { icon: iconem }).bindPopup(" N'GUESSAN KOUAME JEAN ROMOE     ilot:119  lot:1516")
koffiak = L.marker(ex, { icon: iconem }).bindPopup(" ATTI  KOFFI      ilot:185  lot:1849")
gondo = L.marker(ey, { icon: iconem }).bindPopup(" MANINGA GONDO       ilot:112  lot:1213")
logozeni = L.marker(ez, { icon: iconem }).bindPopup(" KONE LOGOZENI      ilot:147  lot:1144")
joeln = L.marker(fa, { icon: iconem }).bindPopup(" N'GBESSO ABENA JOEL      ilot:101  lot:935")
micheeline = L.marker(fb, { icon: iconem }).bindPopup(" KOKO YAH MICHELINE      ilot:101  lot:936")
rishy = L.marker(fc, { icon: iconem }).bindPopup(" KONAN EIHUA DANIEL RISHY      ilot:40  lot:342")
jacques = L.marker(fd, { icon: iconem }).bindPopup(" N'DRI KOUAKOU JEAN-JACQUES      ilot:7  lot:100")
athanase = L.marker(fe, { icon: iconem }).bindPopup(" PEGNY KOUAKOU ATHANASE  (délimitation) ")
clarisses = L.marker(fg, { icon: iconem }).bindPopup(" SALE KONAN AYA CLARISSE      ilot:33  lot:371")
allassane = L.marker(fh, { icon: iconem }).bindPopup(" DIALLO KOROTOUMOU BENE ALLASSANE EPSE BLA      ilot:50  lot:480")
rishyk = L.marker(fi, { icon: iconem }).bindPopup(" KONAN EIHUA DANIEL RISHY      ilot:40  lot:342")
galo = L.marker(fj, { icon: iconem }).bindPopup(" BARRY GALO     ilot:5  lot:25")
ousmane = L.marker(fk, { icon: iconem }).bindPopup(" BAH OUSMANE     ilot:111  lot:736")
sylvestre = L.marker(fl, { icon: iconem }).bindPopup(" KOUASSI KOUAME SYLVESTRE     ilot:80  lot:790")
naby = L.marker(fm, { icon: iconem }).bindPopup(" KONE NIFO NABY     ilot:37  lot:358")
moustapha = L.marker(fn, { icon: iconem }).bindPopup(" KANTE MOUSTAPHA    ilot:9  lot:91")
yao = L.marker(fo, { icon: iconem }).bindPopup(" YOBOUE YAO    ilot:16  lot:132")
paul = L.marker(fp, { icon: iconem }).bindPopup(" KOUAKOU YAO VINCENT DE PAUL    ilot:32  lot:409")
amadou = L.marker(fq, { icon: iconem }).bindPopup(" MALLE AMADOU    ilot:118  lot:1439")
emmanuellek = L.marker(fr, { icon: iconem }).bindPopup(" KAKOU AYA EMMANUELLE    ilot:20  lot:149")
marius = L.marker(fs, { icon: iconem }).bindPopup(" BLE DION MARIUS    ilot:83  lot:745")
georges = L.marker(ft, { icon: iconem }).bindPopup(" KOUAKOU N'DOUA GEORGES    ilot:35  lot:312")
clarissek = L.marker(fu, { icon: iconem }).bindPopup(" KOUAME AHOU CLARISSE    ilot:46  lot:391")
ghislainy = L.marker(fv, { icon: iconem }).bindPopup(" YAO KONAN GHISLAIN    ilot:64B  lot:1367B")
yacoubac = L.marker(fw, { icon: iconem }).bindPopup(" COULIBALY  YACOUBA    ilot:57  lot:496")
ahmadou = L.marker(fx, { icon: iconem }).bindPopup(" OUATTARA AHMADOU    ilot:63  lot:980")
dramane = L.marker(fy, { icon: iconem }).bindPopup(" DEMBELE DRAMANE     ilot:66  lot:625")
kone = L.marker(fz, { icon: iconem }).bindPopup(" KONE SIAKA      ilot:82  lot:666")
Michelk = L.marker(ga, { icon: iconem }).bindPopup(" KOUAME KOUAKOU MICHEL       ilot:124  lot:1546")
Maguerite = L.marker(gb, { icon: iconem }).bindPopup(" AYA EPSE ASSEMAT MARGUERITE        ilot:72  lot:589")
gnamien = L.marker(gc, { icon: iconem }).bindPopup(" KOUASSI GNAMIEN        ilot:9  lot:99")
josephl = L.marker(gd, { icon: iconem }).bindPopup(" LOKOUI JOSEPH         ilot:186  lot:1450")
issouc = L.marker(ge, { icon: iconem }).bindPopup(" COULIBALY ISSOUF          ilot:53  lot:414")
gervaise = L.marker(gf, { icon: iconem }).bindPopup(" DJEREHE IRIKE CLAUDE-GERVAISE         ilot:62  lot:589")
nanan = L.marker(gg, { icon: iconem }).bindPopup(" KOUADIO YAO ET NANAN  EPSE  KOUADIO AFFOUE MONIQUE        ilot:21  lot:140 & 141 & 142 & 143")
hortense = L.marker(gh, { icon: iconem }).bindPopup(" N'GUESSAN ALUI HORTENSE       ilot:99  lot:1087")
jerome = L.marker(gi, { icon: iconem }).bindPopup(" YAO KOFFI JEROME        ilot:28  lot:291")
dramaneo= L.marker(gj, { icon: iconem }).bindPopup(" OUATTARA ABOU DRAMANE       ilot:24  lot:229 & 238 & 239 & 240")
madeleine = L.marker(gk, { icon: iconem }).bindPopup(" OKA LOUKOU MADELEINE        ilot:46  lot:400")
gerardt = L.marker(gl, { icon: iconem }).bindPopup(" TAH MOMBLEHON YVES GERARD        ilot:89  lot:807")
martial = L.marker(gm, { icon: iconem }).bindPopup(" BONI BONI MARTIAL        ilot:39  lot:409")
eudoxie = L.marker(gn, { icon: iconem }).bindPopup(" GUEU JOCELINE EUDOXIE  ilot:399C  lot:3251R")
fatoumatac = L.marker(go, { icon: iconem }).bindPopup(" CISSE FATOUMATA  ilot:18  lot:162")
gaoussou = L.marker(gp, { icon: iconem }).bindPopup(" M.COULIBALY GAOUSSOU  ilot:28  lot:253")
rodrigue = L.marker(gq, { icon: iconem }).bindPopup(" GNAMIAN DAPLET RODRIGUE    ilot:1389  lot:1396")
fofana = L.marker(gr, { icon: iconem }).bindPopup(" FONGBE KADY FOFANA    ilot:179  lot:1589")





var DT2 = L.layerGroup([guenidjale, koffia, romoe, koffiak, gondo, logozeni, joeln, micheeline, rishy, jacques, athanase, clarisses, allassane, rishyk, galo, ousmane, sylvestre, naby, moustapha, yao, paul, amadou, emmanuellek, marius, georges, clarissek, ghislainy, yacoubac, ahmadou, dramane, kone, Michelk, Maguerite, gnamien, josephl, issouc, gervaise, nanan, hortense, jerome, dramaneo, madeleine, gerardt, martial, eudoxie, fatoumatac, gaoussou, rodrigue])
layerControl.addOverlay(DT2, "DT Mars 2024");


// Création de la barre de rechercche

const key = 'kVUatgxvkiAUbyDVIfp2';
L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`, { //style URL
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
}).addTo(map);

//L.control.maptilerGeocoding({ kVUatgxvkiAUbyDVIfp2: key }).addTo(map);

function reloadPage() {
    location.reload();  // Recharge la page actuelle
}



L.Control.geocoder().addTo(map);

L.control.mousePosition().addTo(map);

// Ajouter l'échelle en bas à gauche
L.control.scale({
    position: 'bottomleft', // Position de l'échelle
    imperial: false         // Désactiver les unités impériales (miles, feet)
}).addTo(map);


 // Ajouter la légende en bas à droite
 var legend = L.control({position: 'bottomright'});

 legend.onAdd = function () {
     var div = L.DomUtil.create('div', 'legend');
     div.innerHTML = '<strong>Légende</strong><br>' +
         '<i style="background: turquoise"></i> Janvier<br>' +
         '<i style="background: orange"></i> Février<br>' +
         '<i style="background: darkblue"></i> Mars<br>';
     return div;
 };

 legend.addTo(map);



function showDT() {
    map.addLayer(DT);
    map.addLayer(DT1);
    map.addLayer(DT2);
}




// Importer des fichiers en JSON ou KML 
var FileUploadControl = L.Control.extend({
    onAdd: function(map) {
        var div = L.DomUtil.create('div', 'file-upload-control');
        div.innerHTML = '<i class="fas fa-file-upload"></i><input type="file" id="fileInput" accept=".json,.kml,.dxf"/>';
        div.title = "importer un fichier";

        div.querySelector('input').addEventListener('change', function(event) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function(e) {
                var content = e.target.result;
                var fileType = file.name.split('.').pop().toLowerCase();

                if (fileType === 'json') {
                    var jsonData = JSON.parse(content);
                    L.geoJSON(jsonData).addTo(map);
                } else if (fileType === 'kml') {
                    var kmlData = new DOMParser().parseFromString(content, 'text/xml');
                    var geoJsonData = toGeoJSON.kml(kmlData);
                    L.geoJSON(geoJsonData).addTo(map);
                } else if (fileType === 'dxf') {
                } else {
                    alert('Unsupported file type');
                }
            };

            reader.readAsText(file);
        });

        return div;
    },
    onRemove: function(map) {
        
    }
});

map.addControl(new FileUploadControl({ position: 'topleft' }));


// Fonction pour obtenir la position de l'utilisateur
function onLocationFound(e) {
    var lat = e.coords.latitude;
    var lng = e.coords.longitude;

    // Centrer la carte sur la position de l'utilisateur
    map.setView([lat, lng], 13);

    // Ajouter un marqueur à la position de l'utilisateur
    L.marker([lat, lng]).addTo(map)
        .bindPopup('Vous êtes ici.')
        .openPopup();
}

// Fonction pour gérer les erreurs de géolocalisation
function onLocationError(e) {
    console.log('Erreur de géolocalisation : ' + e.message);
}

// Vérifier si la géolocalisation est disponible
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onLocationFound, onLocationError);
} else {
    alert('Géolocalisation non supportée par ce navigateur.');
}



function exportToJSON() {
    var geojson = drawnItems.toGeoJSON();
    var data = JSON.stringify(geojson, null, 2);
    var blob = new Blob([data], { type: 'application/json' });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = 'map_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function exportToKML() {
    var geojson = drawnItems.toGeoJSON();
    var kml = toKML(geojson);
    var blob = new Blob([kml], { type: 'application/vnd.google-earth.kml+xml' });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = 'map_data.kml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function toKML(geojson) {
    var kml = '<?xml version="1.0" encoding="UTF-8"?>' +
              '<kml xmlns="http://www.opengis.net/kml/2.2">' +
              '<Document>';

    geojson.features.forEach(function(feature) {
        if (feature.geometry.type === 'Point') {
            kml += '<Placemark>' +
                   '<Point>' +
                   '<coordinates>' +
                   feature.geometry.coordinates.join(',') +
                   '</coordinates>' +
                   '</Point>' +
                   '</Placemark>';
        } else if (feature.geometry.type === 'LineString') {
            kml += '<Placemark>' +
                   '<LineString>' +
                   '<coordinates>' +
                   feature.geometry.coordinates.map(function(coord) {
                       return coord.join(',');
                   }).join(' ') +
                   '</coordinates>' +
                   '</LineString>' +
                   '</Placemark>';
        } else if (feature.geometry.type === 'Polygon') {
            kml += '<Placemark>' +
                   '<Polygon>' +
                   '<outerBoundaryIs>' +
                   '<LinearRing>' +
                   '<coordinates>' +
                   feature.geometry.coordinates[0].map(function(coord) {
                       return coord.join(',');
                   }).join(' ') +
                   '</coordinates>' +
                   '</LinearRing>' +
                   '</outerBoundaryIs>' +
                   '</Polygon>' +
                   '</Placemark>';
        }
    });

    kml += '</Document>' +
           '</kml>';

    return kml;
}





// [2] Tableau pour stocker les coordonnées du parcours
var track = []; 
// [3] Polyligne pour le parcours
var polyline = L.polyline([], { color: 'blue' }).addTo(map); 
// [4] Indicateur pour savoir si la délimitation est en cours
var tracking = false; 

// [5] Fonction pour démarrer ou arrêter la délimitation
function toggleTracking() {
    if (tracking) {
        navigator.geolocation.clearWatch(watchId);
        document.getElementById('toggleTracking').textContent = 'Démarrer la Délimitation';
        tracking = false;
    } else {
        watchId = navigator.geolocation.watchPosition(onLocationUpdate, onLocationError, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
        document.getElementById('toggleTracking').textContent = 'Arrêter la Délimitation';
        tracking = true;
    }
}

// [6] Fonction pour mettre à jour la polyligne avec la nouvelle position
function onLocationUpdate(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    track.push([lat, lng]);
    polyline.setLatLngs(track);
    map.setView([lat, lng], 13); // Centrer la carte sur la position actuelle
}

// [7] Fonction pour gérer les erreurs de géolocalisation
function onLocationError(e) {
    console.log('Erreur de géolocalisation : ' + e.message);
}

 // [8] Fonction pour exporter les coordonnées du parcours en JSON
 function exportTrackToJSON() {
    var data = JSON.stringify(track, null, 2);
    var blob = new Blob([data], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.href = url;
    a.download = 'track.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// [9] Fonction pour exporter les coordonnées du parcours en KML
function exportTrackToKML() {
    var kml = '<?xml version="1.0" encoding="UTF-8"?>' +
              '<kml xmlns="http://www.opengis.net/kml/2.2">' +
              '<Document>' +
              '<Placemark>' +
              '<LineString>' +
              '<coordinates>';

    track.forEach(function(coord) {
        kml += coord[1] + ',' + coord[0] + ',0\n';
    });

    kml += '</coordinates>' +
           '</LineString>' +
           '</Placemark>' +
           '</Document>' +
           '</kml>';

    var blob = new Blob([kml], { type: 'application/vnd.google-earth.kml+xml' });
    var url = URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.href = url;
    a.download = 'track.kml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// [10] Ajouter un gestionnaire d'événements pour le bouton "Délimitation"
document.getElementById('toggleTracking').addEventListener('click', toggleTracking);



var drawnItems = new L.FeatureGroup().addTo(map); // Groupe pour les dessins
        var distanceStart = null; // [3] Premier point pour le calcul de la distance

        var drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        }).addTo(map);


        //var drawnItems = new L.FeatureGroup().addTo(map);

        //var drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        //}).addTo(map);

        var polygon = null;


         // Calcul de l'aire

        map.on(L.Draw.Event.CREATED, function (e) {
            var layer = e.layer;
            drawnItems.addLayer(layer);
            if (e.layerType === 'polygon') {
                polygon = layer; // Stocke le polygone pour le calcul de l'aire
            }
        });

        document.getElementById('calculateArea').addEventListener('click', function () {
            if (polygon) {
                var latlngs = polygon.getLatLngs()[0]; // Obtenez les coordonnées du polygone
                var area = L.GeometryUtil.geodesicArea(latlngs); // Calcule l'aire en mètres carrés
                            // Convertir l'aire en unités appropriées
            if (area >= 1000000) { // Si l'aire est >= 1 km²
                area = (area / 1000000).toFixed(2) + ' km²';
            } else if (area >= 10000) { // Si l'aire est >= 1 ha
                area = (area / 10000).toFixed(2) + ' ha';
            } else { // Moins de 1 ha
                area = area.toFixed(2) + ' m²';
            }
                alert("L'aire du polygone est de " + (area)); // Affiche l'aire en km²
            } else {
                alert("Dessinez un polygone sur la carte pour calculer l'aire.");
            }

        });

        function calculateArea(layer) {
            var area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
            var areaText;

            // Convertir l'aire en unités appropriées
            if (area >= 1000000) { // Si l'aire est >= 1 km²
                area = (area / 1000000).toFixed(2) + ' km²';
            } else if (area >= 10000) { // Si l'aire est >= 1 ha
                area = (area / 10000).toFixed(2) + ' ha';
            } else { // Moins de 1 ha
                area = area.toFixed(2) + ' m²';
            }

        
        }


// Fonction pour le zoom dynamique plus lent
function applyDynamicZoom() {
  
    var newCenter = a;
    var newZoom = 11;
    map.flyTo(newCenter, newZoom, {
        duration: 5 // Durée de l'animation en secondes
    });
}

setTimeout(applyDynamicZoom, 1000);

// Pour que le zoom dynamique s'applique dès que la carte est prête
//map.whenReady(function() {
//    applyDynamicZoom();
//});




// Fonction pour rechercher les clients
function searchClients(query) {
    const normalizedQuery = query.toLowerCase();
    const results = [];

    [DT, DT1, DT2].forEach(function(group) {
        group.eachLayer(function(layer) {
            if (layer instanceof L.Marker) {
                const popupContent = layer.getPopup().getContent();
                if (popupContent.toLowerCase().includes(normalizedQuery)) {
                    results.push(layer);
                }
            }
        });
    });

    return results;
}

// Création du contrôle de recherche
var searchBar = L.control({position: 'topright'});

searchBar.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'leaflet-control-search');
    div.innerHTML = '<input type="text" id="searchInput" placeholder="Rechercher un client..." />' +
                    '<button id="searchButton">Rechercher</button>';
    return div;
};

searchBar.addTo(map);

// Groupe pour stocker les résultats de la recherche
var searchResultsGroup = L.layerGroup().addTo(map);

// Ajout de la fonctionnalité de recherche
document.getElementById('searchButton').addEventListener('click', function() {
    var query = document.getElementById('searchInput').value;
    var results = searchClients(query);

    // Effacer les résultats précédents
    searchResultsGroup.clearLayers();

    if (results.length > 0) {
        var bounds = L.latLngBounds();

        results.forEach(function(marker, index) {
            // Créer un nouveau marqueur pour le résultat
            var resultMarker = L.marker(marker.getLatLng(), {
                icon: L.divIcon({
                    className: 'search-result-marker',
                    html: '<div>' + (index + 1) + '</div>',
                    iconSize: [30, 30]
                })
            });

            // Ajouter le popup au nouveau marqueur
            resultMarker.bindPopup(marker.getPopup().getContent());

            // Ajouter le marqueur au groupe de résultats
            searchResultsGroup.addLayer(resultMarker);

            // Étendre les limites pour inclure ce marqueur
            bounds.extend(marker.getLatLng());
        });

        // Ajuster la vue de la carte pour montrer tous les résultats
        map.fitBounds(bounds, { padding: [50, 50] });

        alert(results.length + " client(s) trouvé(s). Consultez la carte pour voir les résultats.");
    } else {
        alert("Aucun client trouvé avec ce nom.");
    }
});

// Ajout d'un événement pour déclencher la recherche en appuyant sur Entrée
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});

// S'assurer que les groupes de marqueurs sont ajoutés à la carte
map.addLayer(DT);
map.addLayer(DT1);
map.addLayer(DT2);


//Optimisation pour les appareils mobiles

map.scrollWheelZoom.disable(); // Désactive le zoom à la molette sur mobile

// Active un double tap pour zoomer
map.doubleTapZoom.enable();

if (isMobile) {
    map.removeControl(map.zoomControl); // Retire le contrôle de zoom sur mobile
    L.control.zoom({
        position: 'bottomleft' // Place le zoom en bas à droite, plus accessible sur mobile
    }).addTo(map);
}

L.marker([latitude, longitude], {
    icon: L.icon({
        iconUrl: 'path-to-icon.png',
        iconSize: isMobile ? [25, 25] : [40, 40] // Réduire la taille des icônes sur mobile
    })
}).addTo(map);