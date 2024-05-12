import express from 'express';
import { router } from './routes';
import { GroupRouter } from './routes/group.router.js';
import { UserRouter } from './routes/user.router.js';
import { FriendRouter } from './routes/friend.router.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use('/api', router);

app.use('/groups', GroupRouter().registerRoutes());
app.use('/users', UserRouter().registerRoutes());
app.use('/friends', FriendRouter().registerRoutes());

app.listen(PORT, () => {
  console.log(`Express server running on port http://localhost:${PORT} 🚀`);
});