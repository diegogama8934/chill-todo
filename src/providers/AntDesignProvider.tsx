import { ConfigProvider } from "antd";

export function AntDesignProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00a6f4",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
