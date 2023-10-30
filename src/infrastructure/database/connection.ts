import { Connection, createConnection } from "typeorm";
import { Todo } from "../../core/domain/entities";
import { databaseConfig } from "../../config/database";

export const connectDatabase = (): Promise<Connection> => {
  return createConnection({
    type: databaseConfig.type,
    host: databaseConfig.host,
    port: databaseConfig.port,
    entities: [Todo],
    synchronize: false,
    logging: false,
  });
};
