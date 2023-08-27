import ftplib
import requests
import ftplib

HOSTNAME = "91.236.136.217"
USERNAME = "u420606_aislide"
PASSWORD = "" # за паролем обращайтесь в телеграм (@mgarbuzenko)

ftp_server = ftplib.FTP(HOSTNAME, USERNAME, PASSWORD)


def download_image_by_url(url, path_to_save):
    img_data = requests.get(url, stream=True).content
    with open(f'{path_to_save}', 'wb') as handler:
        handler.write(img_data)
    return img_data


def upload_presentation_to_server(presentation_name):
    with open(f'./presentations/created_pitch_desks/{presentation_name}', 'rb') as presentation:
        ftp_server.storbinary(f'STOR ./ppt/{presentation_name}', presentation)
    return None


def load_image_from_server(ftp_image_name):
    with open(f'./downloaded_images/{ftp_image_name}', 'wb') as image:
        ftp_server.retrbinary(f'RETR ./img/image/{ftp_image_name}', image.write)
    return None


# load_image_from_server(ftp_image_name='9_name.jpg')

upload_presentation_to_server('1_black_en.pptx')