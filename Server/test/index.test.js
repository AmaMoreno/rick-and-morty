const app = require ('../src/app');
const session = require ('supertest');
const request = session(app);

describe("test de RUTAS", ()=>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it("Responde con status: 200", async ()=>{
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin', e 'image' ", async()=>{
            const response = await request.get('/rickandmorty/character/1');
            const obj ={
                id: '999',
                name: 'Ama',
                species: 'Human',
                origin: {
                    name: 'Earth (C-137)'
                },
                image: 'image.jpg',
                gender: 'Female',
                status: 'Alive'
            }
           for(const prop in obj){
            expect(response.body).toHaveProperty(prop)
           }
        });
        it("Si hay un error responde con status.500", async()=>{
            const response = await request.get('./rickandmorty/character/3029l');
            expect(response.statusCode).toBe(400);
        });

    });

    describe("GET /rickandmorty/login", ()=>{
        it("Responde con un objeto con la propiedad access en true si la info de usuario es valida", async()=>{
            const response = await request.get('/rickandmorty/login?email=ama@gmail.com&password=123asd');
            const access = { access:true};
            expect(response.body).toEqual(access);
        })

        it("Responde con un objeto con la propiedad access en true si la info de usuario no es valida", async()=>{
            const response = await request.get('/rickandmorty/login?email=ama@gmail.com&password=123asd663');
            const access = { access:false};
            expect(response.body).toEqual(access);
        });
    });
})