(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{NnCg:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var a=n("q1tI"),o=n.n(a),i=n("9Dj+"),l=n("QTEN"),r=n("H8eV"),s=n("GpQV");t.default=function(e){var t=e.pageContext,n=e.data,a=t.tag,p=n.allMarkdownRemark,c=p.edges,m=p.totalCount;return o.a.createElement(i.a,null,o.a.createElement(r.a,{title:a,description:"A collection of "+m+" post"}),o.a.createElement(s.p,null,o.a.createElement(s.o,null,o.a.createElement(s.n,null,a),"A collection of "+m+" post"),c.map((function(e){var t=e.node;e.index;return o.a.createElement(l.a,{key:t.fields.slug,title:t.frontmatter.title,url:t.fields.slug,description:t.frontmatter.description||t.excerpt,date:t.frontmatter.date,tags:t.frontmatter.tags})}))))};var p="484791877"},QTEN:function(e,t,n){"use strict";var a=n("zLVn"),o=n("N1om"),i=n.n(o),l=n("q1tI"),r=n("Wbzz"),s=n("9eSz"),p=n.n(s),c=n("vOnD"),m=n("bC0J"),d=c.c.div.withConfig({displayName:"post-cardstyle__PostCardWrapper",componentId:"sc-2jj072-0"})(["\n  position: relative;\n"]),x=c.c.div.withConfig({displayName:"post-cardstyle__PostPreview",componentId:"sc-2jj072-1"})(["\n  margin-bottom: 45px;\n  position: relative;\n  img {\n    border-radius: 3px;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 80%;\n    height: 80%;\n    background-color: #757575;\n    bottom: 0;\n    left: 10%;\n    filter: blur(15px);\n  }\n"]),g=c.c.div.withConfig({displayName:"post-cardstyle__PostDetails",componentId:"sc-2jj072-2"})(["\n  display: flex;\n"]),f=c.c.div.withConfig({displayName:"post-cardstyle__PostDate",componentId:"sc-2jj072-3"})(["\n  font-size: 90px;\n  font-weight: 700;\n  text-align: center;\n  padding: 30px 35px 15px 35px;\n  margin-right: 20px;\n  line-height: 1;\n  color: ",";\n  @media (max-width: 1200px) {\n    font-size: 70px;\n    padding: 25px 25px 15px 25px;\n    margin-right: 35px;\n  }\n  @media (max-width: 990px) {\n    font-size: 56px;\n    padding: 20px 20px 15px 20px;\n    margin-right: 25px;\n  }\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  > span {\n    font-size: 13px;\n    font-weight: 400;\n    display: block;\n    margin-top: 12px;\n    text-transform: uppercase;\n  }\n"],Object(m.a)("colors.textColor","#292929")),u=c.c.div.withConfig({displayName:"post-cardstyle__PostContent",componentId:"sc-2jj072-4"})(["\n  align-self: center;\n"]),h=c.c.h2.withConfig({displayName:"post-cardstyle__PostTitle",componentId:"sc-2jj072-5"})(["\n  font-size: 30px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 10px;\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 26px;\n  }\n  @media (max-width: 990px) {\n    font-size: 21px;\n    margin-bottom: 12px;\n  }\n  @media (max-width: 575px) {\n    font-size: 20px;\n    margin-bottom: 10px;\n  }\n"],Object(m.a)("colors.textColor","#292929"),Object(m.a)("colors.textColor","#292929")),w=c.c.p.withConfig({displayName:"post-cardstyle__Excerpt",componentId:"sc-2jj072-6"})(["\n  font-size: ","px;\n  color: ",";\n  font-weight: 400;\n  line-height: 2;\n  margin-bottom: 0;\n  @media (max-width: 990px) {\n    font-size: 14px;\n  }\n"],Object(m.a)("fontSizes.3","15"),Object(m.a)("textColor","#292929")),y=c.c.div.withConfig({displayName:"post-cardstyle__PostTags",componentId:"sc-2jj072-7"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 15px;\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(m.a)("primary","#D10068")),b=function(e){var t=e.image,n=e.title,o=e.description,s=e.url,c=e.date,m=e.tags,b=e.className,_=e.imageType,j=e.placeholderBG,E=Object(a.a)(e,["image","title","description","url","date","tags","className","imageType","placeholderBG"]),N=["post_card"];return b&&N.push(b),l.createElement(d,Object.assign({className:N.join(" ")},E),null==t?null:l.createElement(x,{className:"post_preview"},l.createElement(r.Link,{to:s},"fluid"===_?l.createElement(p.a,{fluid:t,alt:"post preview",backgroundColor:j}):l.createElement(p.a,{fixed:t,alt:"post preview",backgroundColor:j}))),l.createElement(g,{className:"post_details"},c&&l.createElement(f,{dangerouslySetInnerHTML:{__html:c},className:"post_date"}),l.createElement(u,{className:"post_content"},l.createElement(h,{className:"post_title"},l.createElement(r.Link,{to:s},n)),o&&l.createElement(w,{dangerouslySetInnerHTML:{__html:o},className:"excerpt"}),null==m?null:l.createElement(y,{className:"post_tags"},m.map((function(e,t){return l.createElement(r.Link,{key:t,to:"/tags/"+i()(e)+"/"},"#"+e)}))))))};b.defaultProps={imageType:"fluid"};t.a=b}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-b8a7ef0b8ab19e51170a.js.map