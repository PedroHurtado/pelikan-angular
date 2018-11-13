window.pelikan = window.pelikan || {
    converters:{
        productsConverter:function(value){
            if(!value){
                value=0;
            }
            return `+${value}`;
        }
    }
};

export const converters = window.pelikan.converters;
   
