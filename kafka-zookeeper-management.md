# Kafka, Zookeeper & MongoDB Homebrew Management Guide (macOS)

## Kafka & Zookeeper

### Find Installation Locations
```
brew --prefix kafka
brew --prefix zookeeper
```

### Stop Services
```
brew services stop kafka
brew services stop zookeeper
```

### Start Services
```
brew services start zookeeper
brew services start kafka
```

### Delete Kafka Log Directories (clears all Kafka data)
```
rm -rf /opt/homebrew/var/lib/kafka-logs /opt/homebrew/var/log/kafka-logs /tmp/kafka-logs /tmp/KAFKALOGS
```

### Check if Kafka or Zookeeper is Running
```
ps aux | grep -i kafka | grep -v grep
ps aux | grep -i zookeeper | grep -v grep
```

---

## MongoDB

### Find Installation Location
```
brew --prefix mongodb-community
```

### Stop MongoDB Service
```
brew services stop mongodb-community
```

### Start MongoDB Service
```
brew services start mongodb-community
```

### Delete MongoDB Data Directory (clears all MongoDB data)
```
rm -rf /opt/homebrew/var/mongodb
```

### Check if MongoDB is Running
```
ps aux | grep -i mongod | grep -v grep
```

---

> **Note:** These commands are for Kafka, Zookeeper, and MongoDB installed via Homebrew on Apple Silicon Macs. Adjust paths if your installation differs.
