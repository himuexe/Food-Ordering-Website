import { useCreateMyRestaurant, useGetMyRestaurant ,useUpdateMyRestaurant } from "@/api/MyRestuarantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage =()=>{
    const {createRestaurant, isLoading: isCreateLoading} =useCreateMyRestaurant();
    const {restaurant} = useGetMyRestaurant();
    const {updateRestaurant , isLoading: isUpdateLoading} = useUpdateMyRestaurant();
    const isEditing = !!restaurant;
return <ManageRestaurantForm  restaurant={isEditing?updateRestaurant:createRestaurant} onSave={createRestaurant} isLoading={isCreateLoading || isUpdateLoading}/>
}
export default ManageRestaurantPage;