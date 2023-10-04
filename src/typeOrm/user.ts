import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User{
     @PrimaryGeneratedColumn({type:'bigint'})
     id :number;
     @Column({unique:true})
     userName:string;
    @Column()
     password:string;
    @Column()
     creatAr:Date; 
     @Column({nullable:true})
     authStrategy:string
} 