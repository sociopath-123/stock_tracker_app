import 'dotenv/config';
import mongoose from 'mongoose';



/**
 * Verifies MongoDB connectivity using the DATABASE_URI environment variable and exits the process with a status code.
 *
 * Attempts to connect to the MongoDB instance specified by DATABASE_URI, logs a success message including database name,
 * host, and elapsed connection time, closes the connection, and exits with code 0 on success. If DATABASE_URI is missing
 * or the connection fails, logs an error, attempts to close any open connection, and exits with code 1.
 */
async function main() {
    const uri = process.env.DATABASE_URI;
    if (!uri) {
        console.error('ERROR: MONGODB_URI must be set in .env');
        process.exit(1);
    }

    try {
        const startedAt = Date.now();
        await mongoose.connect(uri, { bufferCommands: false });
        const elapsed = Date.now() - startedAt;

        const dbName = mongoose.connection?.name || '(unknown)';
        const host = mongoose.connection?.host || '(unknown)';

        console.log(`OK: Connected to MongoDB [db="${dbName}", host="${host}", time=${elapsed}ms]`);
        await mongoose.connection.close();
        process.exit(0);
    } catch (err) {
        console.error('ERROR: Database connection failed');
        console.error(err);
        try { await mongoose.connection.close(); } catch {}
        process.exit(1);
    }
}

main();