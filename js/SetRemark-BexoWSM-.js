import{v as i}from"./other-BZ41A2P7.js";import{a3 as d,a0 as m,a1 as V,a2 as p,_}from"./common-LrS3jphM.js";import"./vendor-B3ZXv1Nn.js";const c=t=>(Vue.pushScopeId("data-v-d70397e0"),t=t(),Vue.popScopeId(),t),k={class:"edit-item"},v=c(()=>Vue.createElementVNode("span",{class:"f16"},"修改备注名",-1)),h={class:"content"},f=c(()=>Vue.createElementVNode("div",{class:"notice"},"备注名",-1)),C={class:"input-ctn",style:{"margin-bottom":"1rem"}},g={class:"num"},E=Vue.defineComponent({name:"SetRemark"}),N=Vue.defineComponent({...E,setup(t){const a=VueRouter.useRouter(),e=Vue.reactive({remark:"",oldRemark:""}),n=Vue.computed(()=>e.remark!==e.oldRemark);Vue.onMounted(()=>{});function u(){n.value?d("是否保存修改",s,a.back):a.back()}async function s(){n.value&&(m(),await V(500),p(),a.back())}return(w,o)=>{const l=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",k,[Vue.createVNode(l,{onBack:u},{center:Vue.withCtx(()=>[v]),right:Vue.withCtx(()=>[Vue.createElementVNode("div",null,[Vue.createElementVNode("span",{class:Vue.normalizeClass(["f16",n.value?"save-yes":"save-no"]),onClick:s},"保存",2)])]),_:1}),Vue.createElementVNode("div",h,[f,Vue.createElementVNode("div",C,[Vue.withDirectives(Vue.createElementVNode("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>e.remark=r),placeholder:"请输入备注名"},null,512),[[Vue.vModelText,e.remark]]),e.remark.length?(Vue.openBlock(),Vue.createElementBlock("img",{key:0,class:"close",src:i,alt:"",onClick:o[1]||(o[1]=r=>e.remark="")})):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",g,Vue.toDisplayString(e.remark.length)+"/20",1)])])}}}),y=_(N,[["__scopeId","data-v-d70397e0"]]);export{y as default};