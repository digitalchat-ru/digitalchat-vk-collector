# Development

## Startup

1. Run redis with docker:

   ```
   # create redis container
   docker run --name vk-collector-redis -d -p 6388:6379 redis

   # start if exists
   docker start -d vk-collector-redis

   # join redis-cli
   docker exec -it vk-collector-redis redis-cli
   ```

1. See [Configuration](./Configuration.md)
1. Install dependencies `yarn install`
1. `yarn dev`

## Docs

### Regenerate
```
yarn docs
```
