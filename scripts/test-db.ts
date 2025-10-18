import { connectToDatabase } from "@/database/mongoose";

/**
 * Attempts to connect to the database and terminates the process based on the outcome.
 *
 * On success logs "OK: Database connection succeeded" and exits with status code 0.
 * On failure logs "ERROR: Database connection failed" followed by the error and exits with status code 1.
 */
async function main() {
    try {
        await connectToDatabase();
        // If connectToDatabase resolves without throwing, connection is OK
        console.log("OK: Database connection succeeded");
        process.exit(0);
    } catch (err) {
        console.error("ERROR: Database connection failed");
        console.error(err);
        process.exit(1);
    }
}

main();