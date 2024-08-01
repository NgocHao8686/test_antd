import { Button, Form, Input, message } from "antd"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const SignUp = () => {
    const navigate =useNavigate()
    const onSubmit = async(user:{email:string,password:number})=>{
        try {
            await axios.post(`http://localhost:3000/signup`,user)
            message.success("Dki thanh cong")
            navigate('/signin')
        } catch (error) {
            console.log(error)
            message.error("Dang ki that bai")   
        }
    }
  return (
    <div>
      <div className='w-[550px] mx-auto mt-20'>
            <Form name='basic' layout='vertical' onFinish={onSubmit}>
              <Form.Item label="Email" name='email' rules={[{required:true,message:"Khong de trong!"},{type:'email',message:"Khong dung dinh dang"}]}>
                <Input />
              </Form.Item>
              <Form.Item label="PassWord" name='password' rules={[{required:true,message:"Khong de trong!"},{min:6,message:"It nhat phai 6 ki tu"}]}>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>Dang ki</Button>
              </Form.Item>
            </Form>
        </div>

    </div>
  )
}

export default SignUp