import glob
import os

import cv2
import numpy as np

files_path = os.path.join('F:\python projects cv tts stt\opencv\sentdex', '*.png')
files = sorted(
    glob.iglob(files_path), key=os.path.getctime, reverse=True) 
print(files[0])


i = 1
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
img = cv2.imread(str(files[0]))
grayImg = cv2.cvtColor(img, 0)
faces = face_cascade.detectMultiScale(grayImg, 1.3, 5)
for (x,y,w,h) in faces:
    cv2.rectangle(img, (x,y), (x+w, y+h), (0,0,0), 2)
filename = str(i) + 'Face.png'
cv2.imwrite(filename, img)
i += 1
if cv2.waitKey(1) & 0xff == ord('q'):
    cv2.destroyAllWindows()
