// Compiled by ClojureScript 1.10.238 {}
goog.provide('data_project.color');
goog.require('cljs.core');
goog.require('clojure.string');
data_project.color.colors = cljs.core.PersistentHashMap.fromArrays(["springgreen","aqua","blue","olivedrab","lightskyblue","greenyellow","ivory","navajowhite","cyan","mediumturquoise","darkslateblue","lawngreen","saddlebrown","white","silver","purple","gainsboro","plum","midnightblue","magenta","paleturquoise","hotpink","mediumorchid","gold","powderblue","papayawhip","bisque","salmon","forestgreen","blanchedalmond","crimson","darkturquoise","steelblue","mediumvioletred","aquamarine","darkgoldenrod","orange","darkgray","lime","cornflowerblue","aliceblue","lightgoldenrodyellow","lemonchiffon","fuchsi","lightsalmon","deepskyblue","lightgreen","palegoldenrod","darkred","violet","gray","goldenrod","darksalmon","skyblue","darkviolet","lightcoral","moccasin","darkgreen","lightyellow","lavenderblush","sienna","burlywood","ghostwhite","coral","linen","lightslategray","azure","darkolivegreen","floralwhite","yellow","beige","wheat","slategray","darkmagenta","darkcyan","dodgerblue","mediumseagreen","mediumblue","pink","mistyrose","teal","olive","navy","darkkhaki","green","darkblue","red","maroon","limegreen","brown","seashell","chocolate","antiquewhite","tan","seagreen","palevioletred","rosybrown","cornsilk","lavender","mediumpurple","black","snow","lightseagreen","palegreen","deeppink","dimgray","blueviolet","cadetblue","slateblue","mediumspringgreen","lightpink","firebrick","khaki","royalblue","sandybrown","orangered","darkslategray","orchid","darkorchid","honeydew","oldlace","whitesmoke","mediumaquamarine","lightgrey","peru","indianred ","chartreuse","lightcyan","lightblue","tomato","mintcream","peachpuff","thistle","lightsteelblue","mediumslateblue","turquoise","rebeccapurple","indigo","darkorange","yellowgreen","darkseagreen"],[(65407),(65535),(255),(7048739),(8900346),(11403055),(16777200),(16768685),(65535),(4772300),(4734347),(8190976),(9127187),(16777215),(12632256),(8388736),(14474460),(14524637),(1644912),(16711935),(11529966),(16738740),(12211667),(16766720),(11591910),(16773077),(16770244),(16416882),(2263842),(16772045),(14423100),(52945),(4620980),(13047173),(8388564),(12092939),(16753920),(11119017),(65280),(6591981),(15792383),(16448210),(16775885),(16711935),(16752762),(49151),(9498256),(15657130),(9109504),(15631086),(8421504),(14329120),(15308410),(8900331),(9699539),(15761536),(16770229),(25600),(16777184),(16773365),(10506797),(14596231),(16316671),(16744272),(16445670),(7833753),(15794175),(5597999),(16775920),(16776960),(16119260),(16113331),(7372944),(9109643),(35723),(2003199),(3978097),(205),(16761035),(16770273),(32896),(8421376),(128),(12433259),(32768),(139),(16711680),(8388608),(3329330),(10824234),(16774638),(13789470),(16444375),(13808780),(3050327),(14184595),(12357519),(16775388),(15132410),(9662680),(0),(16775930),(2142890),(10025880),(16716947),(6908265),(9055202),(6266528),(6970061),(64154),(16758465),(11674146),(15787660),(4286945),(16032864),(16729344),(3100495),(14315734),(10040012),(15794160),(16643558),(16119285),(6737322),(13882323),(13468991),(13458524),(8388352),(14745599),(11393254),(16737095),(16121850),(16767673),(14204888),(11584734),(8087790),(4251856),(6697881),(4915330),(16747520),(10145074),(9419919)]);
data_project.color.name_to_hex = (function data_project$color$name_to_hex(color){
return cljs.core.get.call(null,data_project.color.colors,clojure.string.lower_case.call(null,color));
});

//# sourceMappingURL=color.js.map?rel=1533908782818