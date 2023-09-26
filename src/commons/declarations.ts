export type Query = Record<string, any>;
export type Id = string | number;
export interface DatabaseRepository<T> {
    getByIdWithoutRelations(id: Id, query?: Query): Promise<T>;
    create(data: Partial<T>, query?: Query): Promise<T>;
    list(query?: Query): Promise<T[]>;
    getById(id: Id, query?: Query): Promise<T>;
    updateById(id: Id, data: T, query?: Query): Promise<T>;
    deleteById(id: Id, query?: Query): Promise<T>;
    validateUser(username:String, password:String): Promise<T>;
} 