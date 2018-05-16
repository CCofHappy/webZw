// 验证方案使用Vee-validate    帮助文档：https://baianat.github.io/vee-validate/
import VeeValidate, {Validator}  from 'vee-validate';
const Veeconfig = {
    locale: 'zh_CN',
    events: 'blur',
};

const dictionary = {
    zh_CN: {
        messages: {
            required:(field)=> "请输入"+field,
            mobile:(field)=> "请输入合法"+field,
        },
        // attributes可以不写，但是在组件声明式上就需要加上 data-vv-name 属性  两者都写了，以data-vv-name为准
        attributes:{
            email:'邮箱',
            password:'密码',
            mobile: '手机号'
        }
    }
};
// 自定义规则
Validator.extend('mobile', {
   validate: value => {
       return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
   }
});

Validator.localize(dictionary);
export {VeeValidate, Veeconfig}