const app = require("../../server/server"); // Link to your server file
//let server = 'http://localhost:3000';
const supertest = require("supertest");
//const request = supertest(app);

// sample test
app.get("/test", async (req, res) => {
    res.json({ message: "pass!" });
});


it("gets the test endpoint", async done => {
    const response = await request.get("/test");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
    done();
});

describe('Server Tests', () => {
    describe('/', () => {
        describe('GET - root endpoint', () => {
            server = 'http://localhost:3000'
            it('responds with 200 status and text/html content type', () => {
                return request(server)
                    .get('/')
                    .expect('Content-type', /text\/html/)
                    .expect(200);
            });
        });
    });

    describe("POST /users", () => {

        describe("given a username and password", () => {
            // should save a username and password to the DB

            // should respond with a json object containing the user id

            test("should respond with a 200 status code", () => {
                const response = request(app).post("/users").send({
                    username: "username",
                    password: "password"
                })
                expect(response.statusCode).toBe(200)
            })
            // should specify json in the content type header
            test("should specify json in the content type header", async () => {
                const response = await request(app).post("/users").send({
                    username: "username",
                    password: "password"
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))

            })
        })

        describe("when the username and password is missing", () => {

        })

    })
})