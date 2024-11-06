import { Flex, Button } from "antd"

const HeaderTop = () => {
  return (
    <Flex className="h-16" gap="small" align="center" justify="flex-end">
      <Button type="primary">发布</Button>
      <Button>预览</Button>
      <Button type="primary" danger="true">
        重置
      </Button>
    </Flex>
  )
}

export default HeaderTop
