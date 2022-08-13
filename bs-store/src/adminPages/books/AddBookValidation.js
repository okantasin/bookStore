import {object,string,number,date,InterType} from 'yup';
const validationScheme = object({
    title: string().required('Title is required'),
    unitPrice: number().required('Unit price is required').positive('Unit price must be a positive number').
    integer('Unit price must be an integer'),
    publisher: string().required('Publisher is required'),
})
export default validationScheme;
