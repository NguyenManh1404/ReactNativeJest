import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-video';
import Animated, {FadeInDown} from 'react-native-reanimated';

const SOME_VIDEO =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const VideoScreen = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const showFullScreen = () => setIsFullScreen(!isFullScreen);

  const togglePause = useCallback(() => setIsPlaying(!isPlaying), [isPlaying]);

  return (
    <SafeAreaView style={styles.body}>
      <Animated.View entering={FadeInDown.delay(100)}>
        <Video
          accessibilityLabel={'video-player'}
          source={{uri: SOME_VIDEO}}
          style={isFullScreen ? styles.videoFullScreen : styles.video}
          resizeMode={'cover'}
          paused={!isPlaying}
          //   fullscreen={isFullScreen}
        />
      </Animated.View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={showFullScreen}
          testID={'fullScreen'}>
          <Text>Full screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={togglePause}
          testID={'pauseStart'}>
          <Text>Pause/Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  sectionContainer: {
    padding: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  button: {
    borderRadius: 12,
    padding: 6,
    margin: 6,
    backgroundColor: '#9e9ef8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 200,
    height: 200,
  },
  videoFullScreen: {
    width: '100%',
    height: 300,
    zIndex: 5,
  },
  fullScreenBG: {
    backgroundColor: Colors.black,
    ...StyleSheet.absoluteFillObject,
  },
});

export default VideoScreen;
