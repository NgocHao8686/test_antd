import { Button, Form, Input, InputNumber } from "antd"
import { Link, useParams } from "react-router-dom"
import useProductMutation from "../hooks/useProductMutation"
import { IProduct } from "../interface/product"
import useProductQuery from "../hooks/useProductQuery"
import { useEffect } from "react"

const Edit = () => {
    const [form] = Form.useForm()
    const { id } = useParams()
    const query = useProductQuery(id)
    const mutation = useProductMutation()
    useEffect(()=>{
        if(query.data){
            form.setFieldsValue(query.data)
        }
    },[id,query.data,form])
    const onSubmit = (prouduct:IProduct)=>{
        const newProduct = {
            ...prouduct,
            id:id
        }
        mutation.mutate({action:"update",product:newProduct})
    }
  return (
    <div>
      <div className='w-[550px] mx-auto mt-20'>
            <h3 className='text-xl font-bold text-center mb-3'>Thêm sản phẩm</h3>
            <Link to={'/'} className='block mb-3'><Button type='primary' danger>Quay lại</Button></Link>
            <Form name='basic' layout='vertical' onFinish={onSubmit} form={form}>
              <Form.Item label="Tên sản phẩm" name='name' rules={[{required:true,message:"Khong de trong!"}]}>
                <Input />
              </Form.Item>
              <Form.Item label="Anh sản phẩm" name='image' rules={[{required:true,message:"Khong de trong!"}]}>
                <Input />
              </Form.Item>
              <Form.Item label="Gia sản phẩm" name='price' rules={[{required:true,message:"Khong de trong!"}]}>
                <InputNumber className="w-full" />
              </Form.Item>
              <Form.Item label="So luong sản phẩm" name='quality' rules={[{required:true,message:"Khong de trong!"}]}>
                <Input />
              </Form.Item>
              <Form.Item label="Mo ta sản phẩm" name='description' rules={[{required:true,message:"Khong de trong!"}]}>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>Submit</Button>
              </Form.Item>
            </Form>
        </div>

    </div>
  )
}

export default Edit
