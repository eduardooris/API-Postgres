import { Router } from "express";
import CreateUserController from "./controllers/CreateUsersController";
import GetAllUsersController from "./controllers/GetAllUsersController";
import CreateServicesController from "./controllers/CreateServiceController";
import GetAllServicesController from "./controllers/GetAllServicesController";
import CreateAgendasController from "./controllers/CreateAgendasController";
import GetAllAgendasController from "./controllers/GetAllAgendasController";
import DeleteAgendaController from "./controllers/DeleteAgendaController";
import UpdateAgendaController from "./controllers/UpdateAgendaController";
import GetAgendasByIdController from "./controllers/GetAgendaByIdController";

const routes = Router();

// new user
routes.post("/user", new CreateUserController().handle);
routes.get("/user", new GetAllUsersController().handle);

// new service
routes.post("/service", new CreateServicesController().handle);
routes.get("/service", new GetAllServicesController().handle);

// nova agenda
routes.post("/agendas", new CreateAgendasController().handle);
routes.get("/agendas", new GetAllAgendasController().handle);
routes.get("/agendas/:id", new GetAgendasByIdController().handle);
routes.delete("/agendas/:id", new DeleteAgendaController().handle);
routes.patch("/agendas/:id", new UpdateAgendaController().handle);
export default routes;
