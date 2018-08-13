// Compiled by ClojureScript 1.10.238 {}
goog.provide('data_project.scene');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof data_project.scene.scene !== 'undefined'){
} else {
data_project.scene.scene = (new THREE.Scene());
}
if(typeof data_project.scene.renderer !== 'undefined'){
} else {
data_project.scene.renderer = (function (){var renderer = (new THREE.WebGLRenderer());
renderer.setSize((700),(700));

return renderer;
})();
}
if(typeof data_project.scene.p_camera !== 'undefined'){
} else {
data_project.scene.p_camera = (new THREE.PerspectiveCamera((75),(1),0.1,(1000)));
}
data_project.scene.init = (function data_project$scene$init(){
var controls = (new THREE.OrbitControls(data_project.scene.p_camera,(data_project.scene.renderer["domElement"])));
(data_project.scene.p_camera["name"] = "p-camera");

(data_project.scene.p_camera["position"]["z"] = (100));

(controls["target"] = (new THREE.Vector3((0),(0),(0))));

data_project.scene.scene.add(data_project.scene.p_camera);

data_project.scene.render_3d = ((function (controls){
return (function data_project$scene$init_$_render_3d(){
return data_project.scene.renderer.render(data_project.scene.scene,data_project.scene.p_camera);
});})(controls))
;

data_project.scene.animate = ((function (controls){
return (function data_project$scene$init_$_animate(){
window.requestAnimationFrame(data_project.scene.animate);

return data_project.scene.render_3d.call(null);
});})(controls))
;

return data_project.scene.animate.call(null);
});
data_project.scene.setup = (function data_project$scene$setup(){
addTheFloor(data_project.scene.scene);

return addLights(data_project.scene.scene);
});
data_project.scene.text_template = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"text","text",-1790561697),"test",new cljs.core.Keyword(null,"name","name",1843675177),"test",new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"color","color",1011675173),(11141290),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(10),new cljs.core.Keyword(null,"z","z",-789527183),(10)], null);
data_project.scene.display_text = (function data_project$scene$display_text(text,color,y,z){
return add3dText(cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,data_project.scene.text_template,new cljs.core.Keyword(null,"name","name",1843675177),text,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z,new cljs.core.Keyword(null,"color","color",1011675173),color)),data_project.scene.scene);
});
data_project.scene.remove_text = (function data_project$scene$remove_text(name){
return remove(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null)),data_project.scene.scene);
});
if(typeof data_project.scene.startup_state !== 'undefined'){
} else {
data_project.scene.startup_state = (function (){
data_project.scene.init.call(null);

data_project.scene.setup.call(null);

return new cljs.core.Keyword(null,"done","done",-889844188);
})()
;
}
/**
 * element is a js element, e.g. js/document.body
 */
data_project.scene.add_scene = (function data_project$scene$add_scene(element){
return element.appendChild(data_project.scene.renderer.domElement);
});

//# sourceMappingURL=scene.js.map?rel=1534123151418
