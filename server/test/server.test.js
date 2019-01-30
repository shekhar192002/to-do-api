const expect = require('expect');
const request = require('supertest');

const {app} = require("../server");
const {ToDo} = require("../models/ToDo");

beforeEach((done)=>{
    ToDo.remove({}).then(()=> done());
});

describe("Post /todos", () => {
    it("should create a new todo",(done)=>{
        var text = "Add a new toodo";

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            ToDo.find().then((todos)=> {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }
            ).catch((e) => done(e));
        });
    });
} );
describe("Post /todos",() => {
    it("Should not enter empty data",(done)=> {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err) => done(err));
    });
});