package www.taxi.web_app.websocket;

import com.google.gson.Gson;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.util.Map;

public class NetworkInputHandler
{

    public void HandleMessage(WebSocketSession session, TextMessage message)
    {
        Map data = new Gson().fromJson(message.getPayload(), Map.class);
        String msgType = (String) data.get("msgType");
        switch (msgType)
        {
//            case MessageTypes.C2S_VOTING_URL_RESPONSE:
//                HandleVotingUrlResponseNotif(session, data);
//                break;
//            case MessageTypes.INTER_CLIENT_DISCONNECTED:
//                HandleClientDisconnectedNotif(session, data);
//                break;
//            case MessageTypes.C2S_VOTE_NOTIF:
//                HandleUserVotedNotif(session, data);
//                break;
//            case MessageTypes.C2S_VOTE_CANCEL_NOTIF:
//                HandleUserCancelledVoteNotif(session, data);
//                break;
//            case MessageTypes.C2S_END_SESSION_REQUEST:
//                HandleEndSessionRequest(session, data);
//                break;
//            case MessageTypes.C2S_START_VOTING_REQUEST:
//                HandleStartVotingRequest(session, data);
//                break;
//            case MessageTypes.C2S_FINISH_VOTING_REQUEST:
//                HandleFinishVotingRequest(session, data);
//                break;
//            case MessageTypes.C2S_ACCEPT_VOTING_REQUEST:
//                HandleAceptVotingRequest(session, data);
//                break;
//            case MessageTypes.C2S_REJECT_VOTING_REQUEST:
//                HandleRejectVotingRequest(session, data);
//                break;
//            case MessageTypes.C2S_TEXT_MESSAGE_NOTIF:
//                HandleTextMessageNotif(session, data);
//                break;
//            case MessageTypes.C2S_BREAK_REQUEST:
//                HandleBreakRequest(session, data);
//                break;
//            case MessageTypes.C2S_BREAK_STOP_REQUEST:
//                HandleBreakStopRequest(session, data);
//                break;


        }

    }
    }
