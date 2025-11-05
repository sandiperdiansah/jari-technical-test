const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen">
            <section className="bg-theme flex min-h-screen w-full flex-col items-center justify-center py-6">
                {/* <Cofee
                    className="size-20 text-amber-600"
                    strokeWidth={1}
                /> */}
                <div className="w-full p-6 md:w-sm">{children}</div>
            </section>
        </main>
    );
};

export default AuthLayout;
