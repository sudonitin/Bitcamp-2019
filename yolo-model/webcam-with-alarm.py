import cv2
from darkflow.net.build import TFNet
import numpy as np
import time
import winsound
import playsound


options = {
    'model': 'cfg/yolo.cfg',
    'load': 'bin/yolov2.weights',
    'threshold': 0.2,
    'gpu': 1.0
}



tfnet = TFNet(options)
colors = [tuple(255 * np.random.rand(3)) for _ in range(10)]

capture = cv2.VideoCapture(0)
capture.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
capture.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)
countbottle = 0
tl = ()
br = ()
while True:
    stime = time.time()
    ret, frame = capture.read()
    if ret:
        results = tfnet.return_predict(frame)
        for color, result in zip(colors, results):
            tl = (result['topleft']['x'], result['topleft']['y'])
            br = (result['bottomright']['x'], result['bottomright']['y'])
            #print(tl, 'topleft')
            
            label = result['label']
            confidence = result['confidence']
            #print(label)
            if label == 'bottle':
                pass
                text = '{}: {:.0f}%'.format(label, confidence * 100)
                frame = cv2.rectangle(frame, tl, br, color, 5)
                frame = cv2.putText(
                    frame, text, tl, cv2.FONT_HERSHEY_COMPLEX, 1, (0, 0, 0), 2)
            #if(label == 'bottle'):
                btl = tl
                bbr = br
                countbottle += 1
        cv2.imshow('frame', frame)
        if countbottle == 0:
            winsound.PlaySound("F:/yolo/dry_darkflow/darkflow/41952784_burglar-alarm-siren-01.wav", winsound.SND_ASYNC | winsound.SND_ALIAS )
            frame = cv2.rectangle(frame, btl, bbr, (0,0,255), 5)
            frame = cv2.putText(
                    frame, 'bottle is missing', btl, cv2.FONT_HERSHEY_COMPLEX, 1, (0, 255, 255), 2)
            cv2.imshow('frame', frame)
        #print('FPS {:.1f}'.format(1 / (time.time() - stime)))
        else:
           winsound.PlaySound(None, winsound.SND_ASYNC)
        countbottle = 0
    if cv2.waitKey(1) & 0xFF == ord('q'):
        winsound.PlaySound(None, winsound.SND_ASYNC)
        break

capture.release()
cv2.destroyAllWindows()
