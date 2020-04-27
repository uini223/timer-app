import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn
    id;

    @Column
    name;
}
