import { DeleteOutlined, EditOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Popconfirm, Space, Table } from "antd"
import { Link } from "react-router-dom"
import { IProduct } from "../interface/product"
import { useEffect, useState } from "react"
import useProductQuery from "../hooks/useProductQuery"
import useProductMutation from "../hooks/useProductMutation"

const List = () => {
    const [products,setProducts] = useState([] as IProduct[])
    const query = useProductQuery()
    const mutation = useProductMutation()
    useEffect(()=>{
        if(query.data){
            const newProducts = query.data.map((product:IProduct)=>(
                {
                    ...product,
                    key:product.id
                }
            ))
            setProducts(newProducts)
        }
    },[query.data])
    const columns = [
        {
            title:"Ten san pham",
            dataIndex:"name",
            key:"name",
        },
        {
            title:"Anh san pham",
            dataIndex:"image",
            key:"image",
            render:(image:string)=>(
                <>
                <div className="size-12 rounded-full overflow-hidden">
                    <img src={image} className="w-full h-full object-cover" />
                </div>
                </>
            )
        },
        {
            title:"Gia san pham",
            dataIndex:"price",
            key:"price",
        },
        {
            title:"So luong san pham",
            dataIndex:"quality",
            key:"quality",
        },
        {
            title:"Mota san pham",
            dataIndex:"description",
            key:"description",
        },
        {
            title:"Chuc nang",
            key:"actions",
            render:(product:IProduct)=>(
                <Space>
                <Popconfirm
                  title="Xóa sản phẩm"
                  description="Bạn có muốn xóa không?"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={()=> mutation.mutate({action:"delete",product:product})}
                >
                  <Button type='primary' danger><DeleteOutlined /></Button>
                </Popconfirm>
                <Link to={`edit/${product.id}`}><Button type='primary' className='bg-yellow-500'><EditOutlined /></Button></Link>
              </Space>

            )
        }
    ]
  return (
    <>
      <div className=' container mx-auto mt-6'>
            <h1 className=' font-bold text-2xl text-center mb-4'>Danh sách sản phẩm</h1>
            <Space className='mb-4'>
              <Link to="/add"><Button type='primary'><PlusOutlined /> Thêm Mới</Button></Link>
              <Link to="/signup"><Button type='primary'><UserOutlined /> Tài Khoản</Button></Link>
            </Space>
            <Table columns={columns} dataSource={products} />
        </div>
    </>
  )
}

export default List
