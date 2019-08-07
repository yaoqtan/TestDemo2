 
 node+npm
 
 
 npm install
 npm run dev
 npm run build
 
 
 develop : npm run dev
 
    npm run dev  
    open page 
    http://localhost:9000/contactUs.html
    http://localhost:9000/qAndA.html
    http://localhost:9000/membership_point.html
 

    
 
 build : npm run build
 
    npm run build
    production build dist file
 
 
 develop file
 
    -pageJson create page data
    
    -src
        -art  html tempalte
        -assets image 
        -i18n  language sheet  hard code content
        -js js file
        -less less file
        -utils global js
        -index.html  html base template
        
 production file
 
    -dist  (build)


  
 create new page :
 
    1、/pageJson/index.js file add new data(title and template and js)
    2、/src/js/ add new js file (The name should be the same as the js(/pageJson/index.js) )
    3、/src/less add new less file,
    4、in new js file import less file like that :import './../less/contactUs.less' ;