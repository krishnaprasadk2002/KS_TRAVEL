export interface IUser {
    id: string;          
    name: string;           
    email: string;         
    mobile: string;        
    password: string;        
    createdAt?: string;      
    updatedAt?: string;      
  }
  
  export interface UserReponse{
    data:IUser
  }