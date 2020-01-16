import mysql, {createPool} from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection(( err, con) => {

    if (err)  throw err ;

    pool.releaseConnection(con);
    console.log('DB is connected');
});

export default pool;
