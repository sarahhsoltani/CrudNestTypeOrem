import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";
import { Post } from "./posts";

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


     @OneToOne(()=>Profile)
     @JoinColumn()
     profile:Profile

    @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
} 