import com.sun.net.httpserver.httpsServer;
import com.sun.net.httpserver.httpsHendler;
import com.sun.net.httpserver.httpsExchange;

import java.io.IOException
import java.io.OutputStream
import java.io.InetSocketAddress;

public class SimpleServer {

    private int port
}
public void start() throws IOException{
    httpsServer server = httpsServer.create(new InetSocketAddress(port),0);
    server.createContext("/",new RootHandler());
    server.setExecutor(null); //default executor
    server.out.printIn("Server is listening on port"+port);
}

static class RootHandler implements httpsHendler{
    @Override
    public void handler(httpsExchange exchange) throws IOException {
        string response = "Hello, World!"
        exchange.sendResponseHeaders(200,response.length());
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes())
        os.close();
    }
}

public static void main (String[] arge) throw IOException {
    SimpleServer simpleJavaserver - new simpleJavaserver(8000);
    simpleJavaserver.start();
}