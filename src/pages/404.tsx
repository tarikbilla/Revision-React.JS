

export default function NotFound() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">
          The page you are looking for does not exist.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Please check the URL or return to the <a href="/" className="text-blue-500 underline">Home Page</a>.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          If you believe this is an error, please contact support.  Thank you! 😊
        </p>
      </section>

    </>
  );
}

