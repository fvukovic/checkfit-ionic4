package www.taxi.web_app.security;

//Bare minimum, no error checking

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns={"/socket.io/*"})
@CrossOrigin(origins = "*")
public class SocketIOServlet extends HttpServlet
{

   private static final String CONFIG = ":15000:10000:websocket";

   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse resp)

         throws IOException, ServletException {

      serve(req, resp);

   }

   @Override

   protected void doPost(HttpServletRequest req, HttpServletResponse resp)

         throws IOException, ServletException
   {

      serve(req, resp);

   }

   private void serve(HttpServletRequest req, HttpServletResponse resp)

         throws IOException, ServletException {

      String path = req.getPathInfo().trim();

      path = path.startsWith("/")? path.substring(1): path;

      String[] paths = path.split("/");

      //GET /socket.io/socket.io.js – returns the socket.io.js library

      if ("GET".equals(req.getMethod()) && "socket.io.js".equals(paths[0])) {

         resp.setContentType("text/javascript");


      } else if (paths.length <= 2) {

         //Return handshake

         try (PrintWriter pw = resp.getWriter()) {

            pw.print(req.getSession().getId() + CONFIG);

         }

      }

   }

}