export default function generateRandomNumber(): string {
    return Math.random().toString(36).substring(2, 5);
}