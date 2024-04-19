//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shortFilms')
export class shortFilmsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  title: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('date', { nullable: true })
  uploadDate: Date;

  @Column('integer', { nullable: true })
  uploaderId: number;

  @Column('text', { nullable: true })
  linkToFilm: string;
}
