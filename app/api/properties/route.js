import connectDB from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: "hello world" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("something wend wrong", { status: 500 });
  }
};
