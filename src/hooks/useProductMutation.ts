import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { IProduct } from "../interface/product"
import axios from "axios"
import { message } from "antd"

const useProductMutation = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey: ['PRODUCT'],
        mutationFn: async (option: { action: string, product: IProduct }) => {
            console.log(option)
            switch (option.action) {
                case 'add':
                    try {
                        await axios.post(`http://localhost:3000/products`, option.product)
                        message.success("Them thanh cong")
                        navigate('/')
                    } catch (error) {
                        console.log(error)
                    }
                    break;
                case 'delete':
                  
                    try {
                        await axios.delete(`http://localhost:3000/products/${option.product.id}`)
                        message.success("Xoa thanh cong")
                    } catch (error) {
                        console.log(error)
                        message.error("Xoa that bai")
                    }
                    break;
                case 'update':
                    try {
                        await axios.put(`http://localhost:3000/products/${option.product.id}`, option.product)
                        message.success("Cap nhat thanh cong")
                        navigate('/')
                    } catch (error) {
                        console.log(error)
                        message.error("Cap nhat that bai")
                    }
                    break;

                default:
                    break;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['PRODUCT'] })
        }
    })
    return mutation
}

export default useProductMutation
