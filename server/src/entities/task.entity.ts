import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity({ name: 'tasks' })
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ type: 'boolean', default: false })
  isComplete: boolean

  @CreateDateColumn()
  dateCreated: Date

  @UpdateDateColumn()
  dateUpdated: Date
}
